package shared

// ExpressionStatement
// May consist of an expression that does not return a value and is executed solely for its side-effects
type ExpressionStatement struct {
	Expression *interface{} `json:"expression,omitempty"`
	Type       *string      `json:"type,omitempty"`
}
