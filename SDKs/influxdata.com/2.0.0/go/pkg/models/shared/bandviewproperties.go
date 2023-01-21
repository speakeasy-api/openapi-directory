package shared

type BandViewPropertiesHoverDimensionEnum string

const (
	BandViewPropertiesHoverDimensionEnumAuto BandViewPropertiesHoverDimensionEnum = "auto"
	BandViewPropertiesHoverDimensionEnumX    BandViewPropertiesHoverDimensionEnum = "x"
	BandViewPropertiesHoverDimensionEnumY    BandViewPropertiesHoverDimensionEnum = "y"
	BandViewPropertiesHoverDimensionEnumXy   BandViewPropertiesHoverDimensionEnum = "xy"
)

type BandViewPropertiesShapeEnum string

const (
	BandViewPropertiesShapeEnumChronografV2 BandViewPropertiesShapeEnum = "chronograf-v2"
)

type BandViewPropertiesTypeEnum string

const (
	BandViewPropertiesTypeEnumBand BandViewPropertiesTypeEnum = "band"
)

type BandViewProperties struct {
	Axes                       Axes                                  `json:"axes"`
	Colors                     []DashboardColor                      `json:"colors"`
	GenerateXAxisTicks         []string                              `json:"generateXAxisTicks,omitempty"`
	GenerateYAxisTicks         []string                              `json:"generateYAxisTicks,omitempty"`
	Geom                       XyGeomEnum                            `json:"geom"`
	HoverDimension             *BandViewPropertiesHoverDimensionEnum `json:"hoverDimension,omitempty"`
	LegendColorizeRows         *bool                                 `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                                 `json:"legendHide,omitempty"`
	LegendOpacity              *float32                              `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                                `json:"legendOrientationThreshold,omitempty"`
	LowerColumn                *string                               `json:"lowerColumn,omitempty"`
	MainColumn                 *string                               `json:"mainColumn,omitempty"`
	Note                       string                                `json:"note"`
	Queries                    []DashboardQuery                      `json:"queries"`
	Shape                      BandViewPropertiesShapeEnum           `json:"shape"`
	ShowNoteWhenEmpty          bool                                  `json:"showNoteWhenEmpty"`
	StaticLegend               *StaticLegend                         `json:"staticLegend,omitempty"`
	TimeFormat                 *string                               `json:"timeFormat,omitempty"`
	Type                       BandViewPropertiesTypeEnum            `json:"type"`
	UpperColumn                *string                               `json:"upperColumn,omitempty"`
	XColumn                    *string                               `json:"xColumn,omitempty"`
	XTickStart                 *float32                              `json:"xTickStart,omitempty"`
	XTickStep                  *float32                              `json:"xTickStep,omitempty"`
	XTotalTicks                *int64                                `json:"xTotalTicks,omitempty"`
	YColumn                    *string                               `json:"yColumn,omitempty"`
	YTickStart                 *float32                              `json:"yTickStart,omitempty"`
	YTickStep                  *float32                              `json:"yTickStep,omitempty"`
	YTotalTicks                *int64                                `json:"yTotalTicks,omitempty"`
}
