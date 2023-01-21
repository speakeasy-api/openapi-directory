package shared

type LinePlusSingleStatPropertiesHoverDimensionEnum string

const (
	LinePlusSingleStatPropertiesHoverDimensionEnumAuto LinePlusSingleStatPropertiesHoverDimensionEnum = "auto"
	LinePlusSingleStatPropertiesHoverDimensionEnumX    LinePlusSingleStatPropertiesHoverDimensionEnum = "x"
	LinePlusSingleStatPropertiesHoverDimensionEnumY    LinePlusSingleStatPropertiesHoverDimensionEnum = "y"
	LinePlusSingleStatPropertiesHoverDimensionEnumXy   LinePlusSingleStatPropertiesHoverDimensionEnum = "xy"
)

type LinePlusSingleStatPropertiesPositionEnum string

const (
	LinePlusSingleStatPropertiesPositionEnumOverlaid LinePlusSingleStatPropertiesPositionEnum = "overlaid"
	LinePlusSingleStatPropertiesPositionEnumStacked  LinePlusSingleStatPropertiesPositionEnum = "stacked"
)

type LinePlusSingleStatPropertiesShapeEnum string

const (
	LinePlusSingleStatPropertiesShapeEnumChronografV2 LinePlusSingleStatPropertiesShapeEnum = "chronograf-v2"
)

type LinePlusSingleStatPropertiesTypeEnum string

const (
	LinePlusSingleStatPropertiesTypeEnumLinePlusSingleStat LinePlusSingleStatPropertiesTypeEnum = "line-plus-single-stat"
)

type LinePlusSingleStatProperties struct {
	Axes                       Axes                                            `json:"axes"`
	Colors                     []DashboardColor                                `json:"colors"`
	DecimalPlaces              DecimalPlaces                                   `json:"decimalPlaces"`
	GenerateXAxisTicks         []string                                        `json:"generateXAxisTicks,omitempty"`
	GenerateYAxisTicks         []string                                        `json:"generateYAxisTicks,omitempty"`
	HoverDimension             *LinePlusSingleStatPropertiesHoverDimensionEnum `json:"hoverDimension,omitempty"`
	LegendColorizeRows         *bool                                           `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                                           `json:"legendHide,omitempty"`
	LegendOpacity              *float32                                        `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                                          `json:"legendOrientationThreshold,omitempty"`
	Note                       string                                          `json:"note"`
	Position                   LinePlusSingleStatPropertiesPositionEnum        `json:"position"`
	Prefix                     string                                          `json:"prefix"`
	Queries                    []DashboardQuery                                `json:"queries"`
	ShadeBelow                 *bool                                           `json:"shadeBelow,omitempty"`
	Shape                      LinePlusSingleStatPropertiesShapeEnum           `json:"shape"`
	ShowNoteWhenEmpty          bool                                            `json:"showNoteWhenEmpty"`
	StaticLegend               *StaticLegend                                   `json:"staticLegend,omitempty"`
	Suffix                     string                                          `json:"suffix"`
	TimeFormat                 *string                                         `json:"timeFormat,omitempty"`
	Type                       LinePlusSingleStatPropertiesTypeEnum            `json:"type"`
	XColumn                    *string                                         `json:"xColumn,omitempty"`
	XTickStart                 *float32                                        `json:"xTickStart,omitempty"`
	XTickStep                  *float32                                        `json:"xTickStep,omitempty"`
	XTotalTicks                *int64                                          `json:"xTotalTicks,omitempty"`
	YColumn                    *string                                         `json:"yColumn,omitempty"`
	YTickStart                 *float32                                        `json:"yTickStart,omitempty"`
	YTickStep                  *float32                                        `json:"yTickStep,omitempty"`
	YTotalTicks                *int64                                          `json:"yTotalTicks,omitempty"`
}
