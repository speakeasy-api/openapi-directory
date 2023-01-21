package shared

// UnaryExpression
// Uses operators to act on a single operand in an expression
type UnaryExpression struct {
	Argument *interface{} `json:"argument,omitempty"`
	Operator *string      `json:"operator,omitempty"`
	Type     *string      `json:"type,omitempty"`
}
