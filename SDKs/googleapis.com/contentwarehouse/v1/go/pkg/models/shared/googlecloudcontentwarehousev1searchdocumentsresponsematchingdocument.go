package shared

// GoogleCloudContentwarehouseV1SearchDocumentsResponseMatchingDocument
// Document entry with metadata inside SearchDocumentsResponse
type GoogleCloudContentwarehouseV1SearchDocumentsResponseMatchingDocument struct {
	Document          *GoogleCloudContentwarehouseV1Document `json:"document,omitempty"`
	QaResult          *GoogleCloudContentwarehouseV1QaResult `json:"qaResult,omitempty"`
	SearchTextSnippet *string                                `json:"searchTextSnippet,omitempty"`
}
