package shared

// FunctionEntity
// Function's parent is a schema.
type FunctionEntity struct {
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	SQLCode        *string                `json:"sqlCode,omitempty"`
}
