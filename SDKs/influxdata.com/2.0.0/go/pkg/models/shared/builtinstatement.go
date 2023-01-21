package shared

// BuiltinStatement
// Declares a builtin identifier and its type
type BuiltinStatement struct {
	ID   *Identifier `json:"id,omitempty"`
	Type *string     `json:"type,omitempty"`
}
