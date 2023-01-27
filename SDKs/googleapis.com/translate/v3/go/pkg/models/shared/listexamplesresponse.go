package shared

// ListExamplesResponse
// Response message for ListExamples.
type ListExamplesResponse struct {
	Examples      []Example `json:"examples,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
