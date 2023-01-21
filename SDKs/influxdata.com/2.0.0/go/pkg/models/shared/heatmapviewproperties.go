package shared

type HeatmapViewPropertiesShapeEnum string

const (
	HeatmapViewPropertiesShapeEnumChronografV2 HeatmapViewPropertiesShapeEnum = "chronograf-v2"
)

type HeatmapViewPropertiesTypeEnum string

const (
	HeatmapViewPropertiesTypeEnumHeatmap HeatmapViewPropertiesTypeEnum = "heatmap"
)

type HeatmapViewProperties struct {
	BinSize                    float64                        `json:"binSize"`
	Colors                     []string                       `json:"colors"`
	GenerateXAxisTicks         []string                       `json:"generateXAxisTicks,omitempty"`
	GenerateYAxisTicks         []string                       `json:"generateYAxisTicks,omitempty"`
	LegendColorizeRows         *bool                          `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                          `json:"legendHide,omitempty"`
	LegendOpacity              *float32                       `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                         `json:"legendOrientationThreshold,omitempty"`
	Note                       string                         `json:"note"`
	Queries                    []DashboardQuery               `json:"queries"`
	Shape                      HeatmapViewPropertiesShapeEnum `json:"shape"`
	ShowNoteWhenEmpty          bool                           `json:"showNoteWhenEmpty"`
	TimeFormat                 *string                        `json:"timeFormat,omitempty"`
	Type                       HeatmapViewPropertiesTypeEnum  `json:"type"`
	XAxisLabel                 string                         `json:"xAxisLabel"`
	XColumn                    string                         `json:"xColumn"`
	XDomain                    []float64                      `json:"xDomain"`
	XPrefix                    string                         `json:"xPrefix"`
	XSuffix                    string                         `json:"xSuffix"`
	XTickStart                 *float32                       `json:"xTickStart,omitempty"`
	XTickStep                  *float32                       `json:"xTickStep,omitempty"`
	XTotalTicks                *int64                         `json:"xTotalTicks,omitempty"`
	YAxisLabel                 string                         `json:"yAxisLabel"`
	YColumn                    string                         `json:"yColumn"`
	YDomain                    []float64                      `json:"yDomain"`
	YPrefix                    string                         `json:"yPrefix"`
	YSuffix                    string                         `json:"ySuffix"`
	YTickStart                 *float32                       `json:"yTickStart,omitempty"`
	YTickStep                  *float32                       `json:"yTickStep,omitempty"`
	YTotalTicks                *int64                         `json:"yTotalTicks,omitempty"`
}
