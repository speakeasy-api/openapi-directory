package shared

// ConversionWorkspaceInfo
// A conversion workspace's version.
type ConversionWorkspaceInfo struct {
	CommitID *string `json:"commitId,omitempty"`
	Name     *string `json:"name,omitempty"`
}
