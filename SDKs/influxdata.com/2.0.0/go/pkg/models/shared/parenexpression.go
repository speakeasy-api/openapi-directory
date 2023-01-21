package shared

// ParenExpression
// Represents an expression wrapped in parenthesis
type ParenExpression struct {
	Expression *interface{} `json:"expression,omitempty"`
	Type       *string      `json:"type,omitempty"`
}
