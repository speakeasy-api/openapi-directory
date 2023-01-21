package shared

// GoogleCloudContentwarehouseV1ListLinkedTargetsResponse
// Response message for DocumentLinkService.ListLinkedTargets.
type GoogleCloudContentwarehouseV1ListLinkedTargetsResponse struct {
	DocumentLinks []GoogleCloudContentwarehouseV1DocumentLink `json:"documentLinks,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
