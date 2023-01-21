package shared

// LogicalExpression
// Represents the rule conditions that collectively evaluate to either true or false
type LogicalExpression struct {
	Left     *interface{} `json:"left,omitempty"`
	Operator *string      `json:"operator,omitempty"`
	Right    *interface{} `json:"right,omitempty"`
	Type     *string      `json:"type,omitempty"`
}
