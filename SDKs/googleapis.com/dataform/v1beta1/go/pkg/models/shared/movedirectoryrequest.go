package shared

// MoveDirectoryRequest
// `MoveDirectory` request message.
type MoveDirectoryRequest struct {
	NewPath *string `json:"newPath,omitempty"`
	Path    *string `json:"path,omitempty"`
}
