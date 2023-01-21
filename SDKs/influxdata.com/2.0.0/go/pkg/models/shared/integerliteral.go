package shared

// IntegerLiteral
// Represents integer numbers
type IntegerLiteral struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
