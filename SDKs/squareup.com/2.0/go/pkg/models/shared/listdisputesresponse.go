package shared

// ListDisputesResponse
// Defines fields in a `ListDisputes` response.
type ListDisputesResponse struct {
	Cursor   *string   `json:"cursor,omitempty"`
	Disputes []Dispute `json:"disputes,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
