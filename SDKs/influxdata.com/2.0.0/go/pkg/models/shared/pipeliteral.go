package shared

// PipeLiteral
// Represents a specialized literal value, indicating the left hand value of a pipe expression
type PipeLiteral struct {
	Type *string `json:"type,omitempty"`
}
