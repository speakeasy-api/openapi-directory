package shared

// DetectedBrand
// A brand detected in an image.
type DetectedBrand struct {
	Confidence *float64      `json:"confidence,omitempty"`
	Name       *string       `json:"name,omitempty"`
	Rectangle  *BoundingRect `json:"rectangle,omitempty"`
}
