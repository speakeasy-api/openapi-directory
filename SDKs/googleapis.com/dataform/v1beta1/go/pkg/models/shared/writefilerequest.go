package shared

// WriteFileRequest
// `WriteFile` request message.
type WriteFileRequest struct {
	Contents *string `json:"contents,omitempty"`
	Path     *string `json:"path,omitempty"`
}
