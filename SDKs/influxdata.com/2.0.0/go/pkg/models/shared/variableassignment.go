package shared

// VariableAssignment
// Represents the declaration of a variable
type VariableAssignment struct {
	ID   *Identifier  `json:"id,omitempty"`
	Init *interface{} `json:"init,omitempty"`
	Type *string      `json:"type,omitempty"`
}
