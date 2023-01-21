package shared

// FootnoteInput
// A document footnote.
type FootnoteInput struct {
	Content    []StructuralElementInput `json:"content,omitempty"`
	FootnoteID *string                  `json:"footnoteId,omitempty"`
}

// Footnote
// A document footnote.
type Footnote struct {
	Content    []StructuralElement `json:"content,omitempty"`
	FootnoteID *string             `json:"footnoteId,omitempty"`
}
