package shared

type MosaicViewPropertiesHoverDimensionEnum string

const (
	MosaicViewPropertiesHoverDimensionEnumAuto MosaicViewPropertiesHoverDimensionEnum = "auto"
	MosaicViewPropertiesHoverDimensionEnumX    MosaicViewPropertiesHoverDimensionEnum = "x"
	MosaicViewPropertiesHoverDimensionEnumY    MosaicViewPropertiesHoverDimensionEnum = "y"
	MosaicViewPropertiesHoverDimensionEnumXy   MosaicViewPropertiesHoverDimensionEnum = "xy"
)

type MosaicViewPropertiesShapeEnum string

const (
	MosaicViewPropertiesShapeEnumChronografV2 MosaicViewPropertiesShapeEnum = "chronograf-v2"
)

type MosaicViewPropertiesTypeEnum string

const (
	MosaicViewPropertiesTypeEnumMosaic MosaicViewPropertiesTypeEnum = "mosaic"
)

type MosaicViewProperties struct {
	Colors                     []string                                `json:"colors"`
	FillColumns                []string                                `json:"fillColumns"`
	GenerateXAxisTicks         []string                                `json:"generateXAxisTicks,omitempty"`
	HoverDimension             *MosaicViewPropertiesHoverDimensionEnum `json:"hoverDimension,omitempty"`
	LegendColorizeRows         *bool                                   `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                                   `json:"legendHide,omitempty"`
	LegendOpacity              *float32                                `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                                  `json:"legendOrientationThreshold,omitempty"`
	Note                       string                                  `json:"note"`
	Queries                    []DashboardQuery                        `json:"queries"`
	Shape                      MosaicViewPropertiesShapeEnum           `json:"shape"`
	ShowNoteWhenEmpty          bool                                    `json:"showNoteWhenEmpty"`
	TimeFormat                 *string                                 `json:"timeFormat,omitempty"`
	Type                       MosaicViewPropertiesTypeEnum            `json:"type"`
	XAxisLabel                 string                                  `json:"xAxisLabel"`
	XColumn                    string                                  `json:"xColumn"`
	XDomain                    []float64                               `json:"xDomain"`
	XPrefix                    string                                  `json:"xPrefix"`
	XSuffix                    string                                  `json:"xSuffix"`
	XTickStart                 *float32                                `json:"xTickStart,omitempty"`
	XTickStep                  *float32                                `json:"xTickStep,omitempty"`
	XTotalTicks                *int64                                  `json:"xTotalTicks,omitempty"`
	YAxisLabel                 string                                  `json:"yAxisLabel"`
	YDomain                    []float64                               `json:"yDomain"`
	YLabelColumnSeparator      *string                                 `json:"yLabelColumnSeparator,omitempty"`
	YLabelColumns              []string                                `json:"yLabelColumns,omitempty"`
	YPrefix                    string                                  `json:"yPrefix"`
	YSeriesColumns             []string                                `json:"ySeriesColumns"`
	YSuffix                    string                                  `json:"ySuffix"`
}
