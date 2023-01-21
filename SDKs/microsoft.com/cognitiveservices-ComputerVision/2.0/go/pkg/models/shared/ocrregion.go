package shared

// OcrRegion
// A region consists of multiple lines (e.g. a column of text in a multi-column document).
type OcrRegion struct {
	BoundingBox *string   `json:"boundingBox,omitempty"`
	Lines       []OcrLine `json:"lines,omitempty"`
}
