package shared

// DetectResult
// Result of a DetectImage call.
type DetectResult struct {
	Metadata  *ImageMetadata   `json:"metadata,omitempty"`
	Objects   []DetectedObject `json:"objects,omitempty"`
	RequestID *string          `json:"requestId,omitempty"`
}
