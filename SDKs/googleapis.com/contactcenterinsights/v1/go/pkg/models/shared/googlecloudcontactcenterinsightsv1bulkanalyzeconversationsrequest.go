package shared

// GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest
// The request to analyze conversations in bulk.
type GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest struct {
	AnalysisPercentage *float32                                             `json:"analysisPercentage,omitempty"`
	AnnotatorSelector  *GoogleCloudContactcenterinsightsV1AnnotatorSelector `json:"annotatorSelector,omitempty"`
	Filter             *string                                              `json:"filter,omitempty"`
	Parent             *string                                              `json:"parent,omitempty"`
}
