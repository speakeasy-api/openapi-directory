package shared

// MoveFileRequest
// `MoveFile` request message.
type MoveFileRequest struct {
	NewPath *string `json:"newPath,omitempty"`
	Path    *string `json:"path,omitempty"`
}
