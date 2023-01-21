package shared

// File
// Represents a source from a single file
type File struct {
	Body    []interface{}       `json:"body,omitempty"`
	Imports []ImportDeclaration `json:"imports,omitempty"`
	Name    *string             `json:"name,omitempty"`
	Package *PackageClause      `json:"package,omitempty"`
	Type    *string             `json:"type,omitempty"`
}
