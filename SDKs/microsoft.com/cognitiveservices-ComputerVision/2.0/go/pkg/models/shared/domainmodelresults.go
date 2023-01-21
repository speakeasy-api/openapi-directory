package shared

// DomainModelResults
// Result of image analysis using a specific domain model including additional metadata.
type DomainModelResults struct {
	Metadata  *ImageMetadata         `json:"metadata,omitempty"`
	RequestID *string                `json:"requestId,omitempty"`
	Result    map[string]interface{} `json:"result,omitempty"`
}
