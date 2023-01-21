package shared

// GoogleCloudContentwarehouseV1CreateDocumentRequestInput
// Request message for DocumentService.CreateDocument.
type GoogleCloudContentwarehouseV1CreateDocumentRequestInput struct {
	CloudAiDocumentOption *GoogleCloudContentwarehouseV1CloudAiDocumentOption `json:"cloudAiDocumentOption,omitempty"`
	CreateMask            *string                                             `json:"createMask,omitempty"`
	Document              *GoogleCloudContentwarehouseV1DocumentInput         `json:"document,omitempty"`
	Policy                *GoogleIamV1Policy                                  `json:"policy,omitempty"`
	RequestMetadata       *GoogleCloudContentwarehouseV1RequestMetadata       `json:"requestMetadata,omitempty"`
}
