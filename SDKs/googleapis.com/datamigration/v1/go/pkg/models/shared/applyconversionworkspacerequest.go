package shared

// ApplyConversionWorkspaceRequest
// Request message for 'ApplyConversionWorkspace' request.
type ApplyConversionWorkspaceRequest struct {
	ConnectionProfile *string `json:"connectionProfile,omitempty"`
	Filter            *string `json:"filter,omitempty"`
}
