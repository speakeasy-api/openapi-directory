package shared

// MemberAssignment
// Object property assignment
type MemberAssignment struct {
	Init   *interface{}      `json:"init,omitempty"`
	Member *MemberExpression `json:"member,omitempty"`
	Type   *string           `json:"type,omitempty"`
}
