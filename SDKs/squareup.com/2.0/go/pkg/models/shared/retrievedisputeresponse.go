package shared

// RetrieveDisputeResponse
// Defines fields in a `RetrieveDispute` response.
type RetrieveDisputeResponse struct {
	Dispute *Dispute `json:"dispute,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
