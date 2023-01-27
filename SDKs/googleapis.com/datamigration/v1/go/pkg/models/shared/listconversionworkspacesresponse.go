package shared

// ListConversionWorkspacesResponse
// Response message for 'ListConversionWorkspaces' request.
type ListConversionWorkspacesResponse struct {
	ConversionWorkspaces []ConversionWorkspace `json:"conversionWorkspaces,omitempty"`
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	Unreachable          []string              `json:"unreachable,omitempty"`
}
