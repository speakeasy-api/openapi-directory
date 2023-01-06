package shared

// BaseRelationshipResourceBaseRelationshipMeta
// Specific meta field for base relationship resource
type BaseRelationshipResourceBaseRelationshipMeta struct {
	Description string `json:"description"`
}

// BaseRelationshipResource
// Minimum requirements to represent a relationship resource
type BaseRelationshipResource struct {
	ID   string                                        `json:"id"`
	Meta *BaseRelationshipResourceBaseRelationshipMeta `json:"meta,omitempty"`
	Type string                                        `json:"type"`
}
