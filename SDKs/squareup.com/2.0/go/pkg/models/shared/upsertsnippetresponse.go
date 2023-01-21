package shared

// UpsertSnippetResponse
// Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`.
type UpsertSnippetResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Snippet *Snippet `json:"snippet,omitempty"`
}
