package shared

// CreateDisputeEvidenceTextResponse
// Defines the fields in a `CreateDisputeEvidenceText` response.
type CreateDisputeEvidenceTextResponse struct {
	Errors   []Error          `json:"errors,omitempty"`
	Evidence *DisputeEvidence `json:"evidence,omitempty"`
}
