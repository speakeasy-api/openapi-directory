package shared

// ListDatasetsResponse
// Response message for ListDatasets.
type ListDatasetsResponse struct {
	Datasets      []Dataset `json:"datasets,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
