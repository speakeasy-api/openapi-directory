package shared

// SeedConversionWorkspaceRequest
// Request message for 'SeedConversionWorkspace' request.
type SeedConversionWorkspaceRequest struct {
	AutoCommit                   *bool   `json:"autoCommit,omitempty"`
	DestinationConnectionProfile *string `json:"destinationConnectionProfile,omitempty"`
	SourceConnectionProfile      *string `json:"sourceConnectionProfile,omitempty"`
}
