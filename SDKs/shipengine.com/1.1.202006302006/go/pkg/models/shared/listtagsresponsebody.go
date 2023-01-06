package shared

// ListTagsResponseBody
// Response body from a successful GET /tags API call
type ListTagsResponseBody struct {
	Tags []Tag `json:"tags,omitempty"`
}
