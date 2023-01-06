package shared

type Female struct {
	Average         *int64            `json:"average,omitempty"`
	Multiplicity    *int64            `json:"multiplicity,omitempty"`
	Percentile      *int64            `json:"percentile,omitempty"`
	StatisticalInfo *StatisticalInfoF `json:"statistical_info,omitempty"`
	Stdev           *int64            `json:"stdev,omitempty"`
	Value           *int64            `json:"value,omitempty"`
}
