package shared

// FooterInput
// A document footer.
type FooterInput struct {
	Content  []StructuralElementInput `json:"content,omitempty"`
	FooterID *string                  `json:"footerId,omitempty"`
}

// Footer
// A document footer.
type Footer struct {
	Content  []StructuralElement `json:"content,omitempty"`
	FooterID *string             `json:"footerId,omitempty"`
}
