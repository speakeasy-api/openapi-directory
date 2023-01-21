package shared

// OcrLine
// An object describing a single recognized line of text.
type OcrLine struct {
	BoundingBox *string   `json:"boundingBox,omitempty"`
	Words       []OcrWord `json:"words,omitempty"`
}
