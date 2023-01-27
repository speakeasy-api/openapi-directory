package shared

// ListRepositoriesResponse
// `ListRepositories` response message.
type ListRepositoriesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Repositories  []Repository `json:"repositories,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
