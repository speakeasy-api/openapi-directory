package shared

// ImageTag
// An entity observation in the image, along with the confidence score.
type ImageTag struct {
	Confidence *float64 `json:"confidence,omitempty"`
	Hint       *string  `json:"hint,omitempty"`
	Name       *string  `json:"name,omitempty"`
}
