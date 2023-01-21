package shared

// GoogleCloudContentwarehouseV1ListDocumentSchemasResponse
// Response message for DocumentSchemaService.ListDocumentSchemas.
type GoogleCloudContentwarehouseV1ListDocumentSchemasResponse struct {
	DocumentSchemas []GoogleCloudContentwarehouseV1DocumentSchema `json:"documentSchemas,omitempty"`
	NextPageToken   *string                                       `json:"nextPageToken,omitempty"`
}
