package shared

// GoogleCloudContentwarehouseV1QaResult
// Additional result info for the question-answering feature.
type GoogleCloudContentwarehouseV1QaResult struct {
	ConfidenceScore *float32                                         `json:"confidenceScore,omitempty"`
	Highlights      []GoogleCloudContentwarehouseV1QaResultHighlight `json:"highlights,omitempty"`
}
