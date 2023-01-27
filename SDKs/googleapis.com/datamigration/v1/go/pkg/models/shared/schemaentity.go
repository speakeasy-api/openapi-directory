package shared

// SchemaEntity
// Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which supports it). For some database engines the term schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific.
type SchemaEntity struct {
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
}
