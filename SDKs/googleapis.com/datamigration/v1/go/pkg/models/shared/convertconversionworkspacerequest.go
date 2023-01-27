package shared

// ConvertConversionWorkspaceRequest
// Request message for 'ConvertConversionWorkspace' request.
type ConvertConversionWorkspaceRequest struct {
	AutoCommit *bool   `json:"autoCommit,omitempty"`
	Filter     *string `json:"filter,omitempty"`
}
