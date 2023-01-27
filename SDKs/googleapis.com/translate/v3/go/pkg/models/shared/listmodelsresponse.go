package shared

// ListModelsResponse
// Response message for ListModels.
type ListModelsResponse struct {
	Models        []Model `json:"models,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
