package shared

// ImageDescription
// A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
type ImageDescription struct {
	Description *ImageDescriptionDetails `json:"description,omitempty"`
	Metadata    *ImageMetadata           `json:"metadata,omitempty"`
	RequestID   *string                  `json:"requestId,omitempty"`
}
