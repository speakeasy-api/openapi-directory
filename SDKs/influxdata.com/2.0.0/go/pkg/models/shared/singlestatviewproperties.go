package shared

type SingleStatViewPropertiesShapeEnum string

const (
	SingleStatViewPropertiesShapeEnumChronografV2 SingleStatViewPropertiesShapeEnum = "chronograf-v2"
)

type SingleStatViewPropertiesTypeEnum string

const (
	SingleStatViewPropertiesTypeEnumSingleStat SingleStatViewPropertiesTypeEnum = "single-stat"
)

type SingleStatViewProperties struct {
	Colors            []DashboardColor                  `json:"colors"`
	DecimalPlaces     DecimalPlaces                     `json:"decimalPlaces"`
	Note              string                            `json:"note"`
	Prefix            string                            `json:"prefix"`
	Queries           []DashboardQuery                  `json:"queries"`
	Shape             SingleStatViewPropertiesShapeEnum `json:"shape"`
	ShowNoteWhenEmpty bool                              `json:"showNoteWhenEmpty"`
	StaticLegend      *StaticLegend                     `json:"staticLegend,omitempty"`
	Suffix            string                            `json:"suffix"`
	TickPrefix        string                            `json:"tickPrefix"`
	TickSuffix        string                            `json:"tickSuffix"`
	Type              SingleStatViewPropertiesTypeEnum  `json:"type"`
}
