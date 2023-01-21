package shared

// RetrieveDisputeEvidenceResponse
// Defines the fields in a `RetrieveDisputeEvidence` response.
type RetrieveDisputeEvidenceResponse struct {
	Errors   []Error          `json:"errors,omitempty"`
	Evidence *DisputeEvidence `json:"evidence,omitempty"`
}
