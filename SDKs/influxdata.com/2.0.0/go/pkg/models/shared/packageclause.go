package shared

// PackageClause
// Defines a package identifier
type PackageClause struct {
	Name *Identifier `json:"name,omitempty"`
	Type *string     `json:"type,omitempty"`
}
