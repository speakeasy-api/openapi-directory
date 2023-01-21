package shared

// ImageAnalysis
// Result of AnalyzeImage operation.
type ImageAnalysis struct {
	Adult       *AdultInfo               `json:"adult,omitempty"`
	Brands      []DetectedBrand          `json:"brands,omitempty"`
	Categories  []Category               `json:"categories,omitempty"`
	Color       *ColorInfo               `json:"color,omitempty"`
	Description *ImageDescriptionDetails `json:"description,omitempty"`
	Faces       []FaceDescription        `json:"faces,omitempty"`
	ImageType   *ImageType               `json:"imageType,omitempty"`
	Metadata    *ImageMetadata           `json:"metadata,omitempty"`
	Objects     []DetectedObject         `json:"objects,omitempty"`
	RequestID   *string                  `json:"requestId,omitempty"`
	Tags        []ImageTag               `json:"tags,omitempty"`
}
