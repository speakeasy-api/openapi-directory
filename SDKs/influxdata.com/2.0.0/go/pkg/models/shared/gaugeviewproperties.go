package shared

type GaugeViewPropertiesShapeEnum string

const (
	GaugeViewPropertiesShapeEnumChronografV2 GaugeViewPropertiesShapeEnum = "chronograf-v2"
)

type GaugeViewPropertiesTypeEnum string

const (
	GaugeViewPropertiesTypeEnumGauge GaugeViewPropertiesTypeEnum = "gauge"
)

type GaugeViewProperties struct {
	Colors            []DashboardColor             `json:"colors"`
	DecimalPlaces     DecimalPlaces                `json:"decimalPlaces"`
	Note              string                       `json:"note"`
	Prefix            string                       `json:"prefix"`
	Queries           []DashboardQuery             `json:"queries"`
	Shape             GaugeViewPropertiesShapeEnum `json:"shape"`
	ShowNoteWhenEmpty bool                         `json:"showNoteWhenEmpty"`
	Suffix            string                       `json:"suffix"`
	TickPrefix        string                       `json:"tickPrefix"`
	TickSuffix        string                       `json:"tickSuffix"`
	Type              GaugeViewPropertiesTypeEnum  `json:"type"`
}
