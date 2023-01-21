package shared

// ImportDeclaration
// Declares a package import
type ImportDeclaration struct {
	As   *Identifier    `json:"as,omitempty"`
	Path *StringLiteral `json:"path,omitempty"`
	Type *string        `json:"type,omitempty"`
}
