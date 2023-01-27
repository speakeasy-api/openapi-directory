package shared

// ReadFileResponse
// `ReadFile` response message.
type ReadFileResponse struct {
	FileContents *string `json:"fileContents,omitempty"`
}
