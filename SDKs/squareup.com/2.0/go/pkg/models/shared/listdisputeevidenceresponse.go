package shared

// ListDisputeEvidenceResponse
// Defines the fields in a `ListDisputeEvidence` response.
type ListDisputeEvidenceResponse struct {
	Cursor   *string           `json:"cursor,omitempty"`
	Errors   []Error           `json:"errors,omitempty"`
	Evidence []DisputeEvidence `json:"evidence,omitempty"`
}
