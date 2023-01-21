package shared

type HistogramViewPropertiesPositionEnum string

const (
	HistogramViewPropertiesPositionEnumOverlaid HistogramViewPropertiesPositionEnum = "overlaid"
	HistogramViewPropertiesPositionEnumStacked  HistogramViewPropertiesPositionEnum = "stacked"
)

type HistogramViewPropertiesShapeEnum string

const (
	HistogramViewPropertiesShapeEnumChronografV2 HistogramViewPropertiesShapeEnum = "chronograf-v2"
)

type HistogramViewPropertiesTypeEnum string

const (
	HistogramViewPropertiesTypeEnumHistogram HistogramViewPropertiesTypeEnum = "histogram"
)

type HistogramViewProperties struct {
	BinCount                   int64                               `json:"binCount"`
	Colors                     []DashboardColor                    `json:"colors"`
	FillColumns                []string                            `json:"fillColumns"`
	LegendColorizeRows         *bool                               `json:"legendColorizeRows,omitempty"`
	LegendHide                 *bool                               `json:"legendHide,omitempty"`
	LegendOpacity              *float32                            `json:"legendOpacity,omitempty"`
	LegendOrientationThreshold *int64                              `json:"legendOrientationThreshold,omitempty"`
	Note                       string                              `json:"note"`
	Position                   HistogramViewPropertiesPositionEnum `json:"position"`
	Queries                    []DashboardQuery                    `json:"queries"`
	Shape                      HistogramViewPropertiesShapeEnum    `json:"shape"`
	ShowNoteWhenEmpty          bool                                `json:"showNoteWhenEmpty"`
	Type                       HistogramViewPropertiesTypeEnum     `json:"type"`
	XAxisLabel                 string                              `json:"xAxisLabel"`
	XColumn                    string                              `json:"xColumn"`
	XDomain                    []float32                           `json:"xDomain"`
}
