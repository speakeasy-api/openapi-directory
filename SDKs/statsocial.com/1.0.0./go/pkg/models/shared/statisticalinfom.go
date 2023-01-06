package shared

type StatisticalInfoM struct {
	ErrorRange *int64 `json:"error_range,omitempty"`
	LowerBound *int64 `json:"lower_bound,omitempty"`
	UpperBound *int64 `json:"upper_bound,omitempty"`
}
