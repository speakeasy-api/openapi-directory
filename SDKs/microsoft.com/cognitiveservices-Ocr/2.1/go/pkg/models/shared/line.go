package shared

// Line
// An object representing a recognized text line.
type Line struct {
	BoundingBox []float64 `json:"boundingBox,omitempty"`
	Text        *string   `json:"text,omitempty"`
	Words       []Word    `json:"words,omitempty"`
}
