package shared

// NumberInsightResponseGetReport
// Number Insight
type NumberInsightResponseGetReport struct {
	Network *string        `json:"network,omitempty"`
	Number  *string        `json:"number,omitempty"`
	Product *ProductNiEnum `json:"product,omitempty"`
}
