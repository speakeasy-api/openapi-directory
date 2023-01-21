package shared

// AcceptDisputeResponse
// Defines the fields in an `AcceptDispute` response.
type AcceptDisputeResponse struct {
	Dispute *Dispute `json:"dispute,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
