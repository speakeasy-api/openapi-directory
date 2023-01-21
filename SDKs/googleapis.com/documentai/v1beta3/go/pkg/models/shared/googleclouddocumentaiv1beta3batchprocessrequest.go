package shared

// GoogleCloudDocumentaiV1beta3BatchProcessRequest
// Request message for batch process document method.
type GoogleCloudDocumentaiV1beta3BatchProcessRequest struct {
	DocumentOutputConfig *GoogleCloudDocumentaiV1beta3DocumentOutputConfig                 `json:"documentOutputConfig,omitempty"`
	InputConfigs         []GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig `json:"inputConfigs,omitempty"`
	InputDocuments       *GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig            `json:"inputDocuments,omitempty"`
	OutputConfig         *GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig `json:"outputConfig,omitempty"`
	ProcessOptions       *GoogleCloudDocumentaiV1beta3ProcessOptions                       `json:"processOptions,omitempty"`
	SkipHumanReview      *bool                                                             `json:"skipHumanReview,omitempty"`
}
