package shared

// GoogleCloudContentwarehouseV1CreateDocumentResponse
// Response message for DocumentService.CreateDocument.
type GoogleCloudContentwarehouseV1CreateDocumentResponse struct {
	Document         *GoogleCloudContentwarehouseV1Document         `json:"document,omitempty"`
	Metadata         *GoogleCloudContentwarehouseV1ResponseMetadata `json:"metadata,omitempty"`
	RuleEngineOutput *GoogleCloudContentwarehouseV1RuleEngineOutput `json:"ruleEngineOutput,omitempty"`
}
