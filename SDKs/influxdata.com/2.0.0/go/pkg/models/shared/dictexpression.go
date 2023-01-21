package shared

// DictExpression
// Used to create and directly specify the elements of a dictionary
type DictExpression struct {
	Elements []DictItem `json:"elements,omitempty"`
	Type     *string    `json:"type,omitempty"`
}
