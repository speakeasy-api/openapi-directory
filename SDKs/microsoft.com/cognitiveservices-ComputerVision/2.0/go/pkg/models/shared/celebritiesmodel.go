package shared

// CelebritiesModel
// An object describing possible celebrity identification.
type CelebritiesModel struct {
	Confidence    *float64       `json:"confidence,omitempty"`
	FaceRectangle *FaceRectangle `json:"faceRectangle,omitempty"`
	Name          *string        `json:"name,omitempty"`
}
