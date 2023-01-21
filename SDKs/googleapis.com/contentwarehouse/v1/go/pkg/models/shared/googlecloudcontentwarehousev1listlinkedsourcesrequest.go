package shared

// GoogleCloudContentwarehouseV1ListLinkedSourcesRequest
// Response message for DocumentLinkService.ListLinkedSources.
type GoogleCloudContentwarehouseV1ListLinkedSourcesRequest struct {
	PageSize        *int32                                        `json:"pageSize,omitempty"`
	PageToken       *string                                       `json:"pageToken,omitempty"`
	RequestMetadata *GoogleCloudContentwarehouseV1RequestMetadata `json:"requestMetadata,omitempty"`
}
