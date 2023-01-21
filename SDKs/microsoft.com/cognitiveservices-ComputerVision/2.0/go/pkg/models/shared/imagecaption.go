package shared

// ImageCaption
// An image caption, i.e. a brief description of what the image depicts.
type ImageCaption struct {
	Confidence *float64 `json:"confidence,omitempty"`
	Text       *string  `json:"text,omitempty"`
}
