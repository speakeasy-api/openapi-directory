package shared

// BooleanLiteral
// Represents boolean values
type BooleanLiteral struct {
	Type  *string `json:"type,omitempty"`
	Value *bool   `json:"value,omitempty"`
}
