package shared

// StoredProcedureEntity
// Stored procedure's parent is a schema.
type StoredProcedureEntity struct {
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	SQLCode        *string                `json:"sqlCode,omitempty"`
}
