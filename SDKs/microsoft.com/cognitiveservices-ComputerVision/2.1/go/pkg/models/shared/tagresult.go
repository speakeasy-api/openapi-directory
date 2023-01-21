package shared

// TagResult
// The results of a image tag operation, including any tags and image metadata.
type TagResult struct {
	Metadata  *ImageMetadata `json:"metadata,omitempty"`
	RequestID *string        `json:"requestId,omitempty"`
	Tags      []ImageTag     `json:"tags,omitempty"`
}
