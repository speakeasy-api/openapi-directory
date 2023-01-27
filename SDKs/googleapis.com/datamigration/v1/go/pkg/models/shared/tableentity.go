package shared

// TableEntity
// Table's parent is a schema.
type TableEntity struct {
	Columns        []ColumnEntity         `json:"columns,omitempty"`
	Comment        *string                `json:"comment,omitempty"`
	Constraints    []ConstraintEntity     `json:"constraints,omitempty"`
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	Indices        []IndexEntity          `json:"indices,omitempty"`
	Triggers       []TriggerEntity        `json:"triggers,omitempty"`
}
