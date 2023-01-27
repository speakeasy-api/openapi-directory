package shared

// CommitWorkspaceChangesRequest
// `CommitWorkspaceChanges` request message.
type CommitWorkspaceChangesRequest struct {
	Author        *CommitAuthor `json:"author,omitempty"`
	CommitMessage *string       `json:"commitMessage,omitempty"`
	Paths         []string      `json:"paths,omitempty"`
}
