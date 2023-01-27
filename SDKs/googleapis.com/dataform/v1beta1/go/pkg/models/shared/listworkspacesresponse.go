package shared

// ListWorkspacesResponse
// `ListWorkspaces` response message.
type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Unreachable   []string    `json:"unreachable,omitempty"`
	Workspaces    []Workspace `json:"workspaces,omitempty"`
}
