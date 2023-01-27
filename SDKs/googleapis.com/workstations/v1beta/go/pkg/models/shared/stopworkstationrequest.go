package shared

// StopWorkstationRequest
// Request message for StopWorkstation.
type StopWorkstationRequest struct {
	Etag         *string `json:"etag,omitempty"`
	ValidateOnly *bool   `json:"validateOnly,omitempty"`
}
