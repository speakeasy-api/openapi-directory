package shared

// ConditionalExpression
// Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test`
type ConditionalExpression struct {
	Alternate  *interface{} `json:"alternate,omitempty"`
	Consequent *interface{} `json:"consequent,omitempty"`
	Test       *interface{} `json:"test,omitempty"`
	Type       *string      `json:"type,omitempty"`
}
