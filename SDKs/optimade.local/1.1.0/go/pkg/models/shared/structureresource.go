package shared

// StructureResourceResourceLinks
// A Resource Links object
type StructureResourceResourceLinks struct {
	Self *interface{} `json:"self,omitempty"`
}

// StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// StructureResourceEntryRelationshipsReferenceRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type StructureResourceEntryRelationshipsReferenceRelationship struct {
	Data  *interface{}                                                               `json:"data,omitempty"`
	Links *StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                     `json:"meta,omitempty"`
}

// StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// StructureResourceEntryRelationshipsStructureRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type StructureResourceEntryRelationshipsStructureRelationship struct {
	Data  *interface{}                                                               `json:"data,omitempty"`
	Links *StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                     `json:"meta,omitempty"`
}

// StructureResourceEntryRelationships
// This model wraps the JSON API Relationships to include type-specific top level keys.
type StructureResourceEntryRelationships struct {
	References *StructureResourceEntryRelationshipsReferenceRelationship `json:"references,omitempty"`
	Structures *StructureResourceEntryRelationshipsStructureRelationship `json:"structures,omitempty"`
}

// StructureResource
// Representing a structure.
type StructureResource struct {
	Attributes    StructureResourceAttributes          `json:"attributes"`
	ID            string                               `json:"id"`
	Links         *StructureResourceResourceLinks      `json:"links,omitempty"`
	Meta          map[string]interface{}               `json:"meta,omitempty"`
	Relationships *StructureResourceEntryRelationships `json:"relationships,omitempty"`
	Type          string                               `json:"type"`
}
