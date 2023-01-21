package shared

// SubmitEvidenceResponse
// Defines the fields in a `SubmitEvidence` response.
type SubmitEvidenceResponse struct {
	Dispute *Dispute `json:"dispute,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
