package shared

type XyViewPropertiesHoverDimensionEnum string

const (
	XYViewPropertiesHoverDimensionEnumAuto XyViewPropertiesHoverDimensionEnum = "auto"
	XYViewPropertiesHoverDimensionEnumX    XyViewPropertiesHoverDimensionEnum = "x"
	XYViewPropertiesHoverDimensionEnumY    XyViewPropertiesHoverDimensionEnum = "y"
	XYViewPropertiesHoverDimensionEnumXy   XyViewPropertiesHoverDimensionEnum = "xy"
)

type XyViewPropertiesPositionEnum string

const (
	XYViewPropertiesPositionEnumOverlaid XyViewPropertiesPositionEnum = "overlaid"
	XYViewPropertiesPositionEnumStacked  XyViewPropertiesPositionEnum = "stacked"
)

type XyViewPropertiesShapeEnum string

const (
	XYViewPropertiesShapeEnumChronografV2 XyViewPropertiesShapeEnum = "chronograf-v2"
)

type XyViewPropertiesTypeEnum string

const (
	XYViewPropertiesTypeEnumXy XyViewPropertiesTypeEnum = "xy"
)

type XyViewProperties struct {
	Axes                       Axes                                `json:"axes"`
	Colors                     []DashboardColor                    `json:"colors"`
	GenerateXAxisTicks         []string                            `json:"generateXAxisTicks,omitempty"`
	GenerateYAxisTicks         []string                            `json:"generateYAxisTicks,omitempty"`
	Geom                       XyGeomEnum                          `json:"geom"`
	HoverDimension             *XyViewPropertiesHoverDimensionEnum `json:"hoverDimension,omitempty"`
	LegendColorizeRows         *bool                               `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                               `json:"legendHide,omitempty"`
	LegendOpacity              *float32                            `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                              `json:"legendOrientationThreshold,omitempty"`
	Note                       string                              `json:"note"`
	Position                   XyViewPropertiesPositionEnum        `json:"position"`
	Queries                    []DashboardQuery                    `json:"queries"`
	ShadeBelow                 *bool                               `json:"shadeBelow,omitempty"`
	Shape                      XyViewPropertiesShapeEnum           `json:"shape"`
	ShowNoteWhenEmpty          bool                                `json:"showNoteWhenEmpty"`
	StaticLegend               *StaticLegend                       `json:"staticLegend,omitempty"`
	TimeFormat                 *string                             `json:"timeFormat,omitempty"`
	Type                       XyViewPropertiesTypeEnum            `json:"type"`
	XColumn                    *string                             `json:"xColumn,omitempty"`
	XTickStart                 *float32                            `json:"xTickStart,omitempty"`
	XTickStep                  *float32                            `json:"xTickStep,omitempty"`
	XTotalTicks                *int64                              `json:"xTotalTicks,omitempty"`
	YColumn                    *string                             `json:"yColumn,omitempty"`
	YTickStart                 *float32                            `json:"yTickStart,omitempty"`
	YTickStep                  *float32                            `json:"yTickStep,omitempty"`
	YTotalTicks                *int64                              `json:"yTotalTicks,omitempty"`
}
