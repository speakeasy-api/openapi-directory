package shared

// GoogleCloudContentwarehouseV1ListLinkedSourcesResponse
// Response message for DocumentLinkService.ListLinkedSources.
type GoogleCloudContentwarehouseV1ListLinkedSourcesResponse struct {
	DocumentLinks []GoogleCloudContentwarehouseV1DocumentLink `json:"documentLinks,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
