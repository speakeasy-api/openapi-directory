package shared

// BadStatement
// A placeholder for statements for which no correct statement nodes can be created
type BadStatement struct {
	Text *string `json:"text,omitempty"`
	Type *string `json:"type,omitempty"`
}
