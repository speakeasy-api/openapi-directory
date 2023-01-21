package shared

// FaceRectangle
// An object describing face rectangle.
type FaceRectangle struct {
	Height *int32 `json:"height,omitempty"`
	Left   *int32 `json:"left,omitempty"`
	Top    *int32 `json:"top,omitempty"`
	Width  *int32 `json:"width,omitempty"`
}
