package shared

// BinaryExpression
// uses binary operators to act on two operands in an expression
type BinaryExpression struct {
	Left     *interface{} `json:"left,omitempty"`
	Operator *string      `json:"operator,omitempty"`
	Right    *interface{} `json:"right,omitempty"`
	Type     *string      `json:"type,omitempty"`
}
