package shared

// GoogleCloudContentwarehouseV1ListSynonymSetsResponse
// Response message for SynonymSetService.ListSynonymSets.
type GoogleCloudContentwarehouseV1ListSynonymSetsResponse struct {
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
	SynonymSets   []GoogleCloudContentwarehouseV1SynonymSet `json:"synonymSets,omitempty"`
}
