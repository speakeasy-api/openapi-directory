package shared

// ViewEntity
// View's parent is a schema.
type ViewEntity struct {
	Constraints    []ConstraintEntity     `json:"constraints,omitempty"`
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	SQLCode        *string                `json:"sqlCode,omitempty"`
}
