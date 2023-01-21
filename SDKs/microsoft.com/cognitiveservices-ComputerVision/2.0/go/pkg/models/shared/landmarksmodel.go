package shared

// LandmarksModel
// A landmark recognized in the image.
type LandmarksModel struct {
	Confidence *float64 `json:"confidence,omitempty"`
	Name       *string  `json:"name,omitempty"`
}
