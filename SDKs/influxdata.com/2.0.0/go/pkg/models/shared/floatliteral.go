package shared

// FloatLiteral
// Represents floating point numbers according to the double representations defined by the IEEE-754-1985
type FloatLiteral struct {
	Type  *string  `json:"type,omitempty"`
	Value *float64 `json:"value,omitempty"`
}
