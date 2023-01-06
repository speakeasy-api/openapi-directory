package shared

// NumberInsight
// Number Insight
type NumberInsight struct {
	Network *string       `json:"network,omitempty"`
	Number  *string       `json:"number,omitempty"`
	Product ProductNiEnum `json:"product"`
}
