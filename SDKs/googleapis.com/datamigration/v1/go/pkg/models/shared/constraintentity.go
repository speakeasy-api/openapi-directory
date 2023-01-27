package shared

// ConstraintEntity
// Constraint is not used as an independent entity, it is retrieved as part of another entity such as Table or View.
type ConstraintEntity struct {
	CustomFeatures   map[string]interface{} `json:"customFeatures,omitempty"`
	Name             *string                `json:"name,omitempty"`
	ReferenceColumns []string               `json:"referenceColumns,omitempty"`
	ReferenceTable   *string                `json:"referenceTable,omitempty"`
	TableColumns     []string               `json:"tableColumns,omitempty"`
	TableName        *string                `json:"tableName,omitempty"`
	Type             *string                `json:"type,omitempty"`
}
