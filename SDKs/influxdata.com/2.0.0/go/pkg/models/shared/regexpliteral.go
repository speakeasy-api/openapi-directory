package shared

// RegexpLiteral
// Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2
type RegexpLiteral struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
