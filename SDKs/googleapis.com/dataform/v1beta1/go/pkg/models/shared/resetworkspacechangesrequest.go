package shared

// ResetWorkspaceChangesRequest
// `ResetWorkspaceChanges` request message.
type ResetWorkspaceChangesRequest struct {
	Clean *bool    `json:"clean,omitempty"`
	Paths []string `json:"paths,omitempty"`
}
