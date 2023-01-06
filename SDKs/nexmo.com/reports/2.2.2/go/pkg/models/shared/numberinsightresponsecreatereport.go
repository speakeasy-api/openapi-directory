package shared

// NumberInsightResponseCreateReport
// Number Insight
type NumberInsightResponseCreateReport struct {
	Network *string        `json:"network,omitempty"`
	Number  *string        `json:"number,omitempty"`
	Product *ProductNiEnum `json:"product,omitempty"`
}
