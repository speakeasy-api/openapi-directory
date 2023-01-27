package shared

// StartWorkstationRequest
// Request message for StartWorkstation.
type StartWorkstationRequest struct {
	Etag         *string `json:"etag,omitempty"`
	ValidateOnly *bool   `json:"validateOnly,omitempty"`
}
