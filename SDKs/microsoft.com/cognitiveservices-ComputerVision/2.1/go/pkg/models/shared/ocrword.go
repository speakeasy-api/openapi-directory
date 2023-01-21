package shared

// OcrWord
// Information on a recognized word.
type OcrWord struct {
	BoundingBox *string `json:"boundingBox,omitempty"`
	Text        *string `json:"text,omitempty"`
}
