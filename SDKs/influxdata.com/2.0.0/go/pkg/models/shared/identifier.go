package shared

// Identifier
// A valid Flux identifier
type Identifier struct {
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}
