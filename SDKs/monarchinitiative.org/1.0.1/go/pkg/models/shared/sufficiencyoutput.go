package shared

type SufficiencyOutput struct {
	CategoricalScore *float64 `json:"categorical_score,omitempty"`
	ScaledScore      *float64 `json:"scaled_score,omitempty"`
	SimpleScore      *float64 `json:"simple_score,omitempty"`
}
