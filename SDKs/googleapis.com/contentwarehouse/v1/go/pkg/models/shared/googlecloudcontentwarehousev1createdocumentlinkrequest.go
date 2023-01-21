package shared

// GoogleCloudContentwarehouseV1CreateDocumentLinkRequestInput
// Request message for DocumentLinkService.CreateDocumentLink.
type GoogleCloudContentwarehouseV1CreateDocumentLinkRequestInput struct {
	DocumentLink    *GoogleCloudContentwarehouseV1DocumentLinkInput `json:"documentLink,omitempty"`
	RequestMetadata *GoogleCloudContentwarehouseV1RequestMetadata   `json:"requestMetadata,omitempty"`
}
