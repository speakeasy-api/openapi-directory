package shared

// RetrieveSnippetResponse
// Represents a `RetrieveSnippet` response. The response can include either `snippet` or `errors`.
type RetrieveSnippetResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Snippet *Snippet `json:"snippet,omitempty"`
}
