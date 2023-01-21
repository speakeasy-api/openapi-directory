package shared

// StringLiteral
// Expressions begin and end with double quote marks
type StringLiteral struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
