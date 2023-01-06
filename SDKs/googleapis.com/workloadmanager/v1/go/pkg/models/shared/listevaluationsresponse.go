package shared

// ListEvaluationsResponse
// Message for response to listing Evaluations
type ListEvaluationsResponse struct {
	Evaluations   []Evaluation `json:"evaluations,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
