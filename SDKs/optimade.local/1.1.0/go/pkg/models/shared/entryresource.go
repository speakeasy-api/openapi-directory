package shared

import (
	"time"
)

// EntryResourceEntryResourceAttributes
// Contains key-value pairs representing the entry's properties.
type EntryResourceEntryResourceAttributes struct {
	ImmutableID  *string   `json:"immutable_id,omitempty"`
	LastModified time.Time `json:"last_modified"`
}

// EntryResourceResourceLinks
// A Resource Links object
type EntryResourceResourceLinks struct {
	Self *interface{} `json:"self,omitempty"`
}

// EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// EntryResourceEntryRelationshipsReferenceRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type EntryResourceEntryRelationshipsReferenceRelationship struct {
	Data  *interface{}                                                           `json:"data,omitempty"`
	Links *EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                 `json:"meta,omitempty"`
}

// EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// EntryResourceEntryRelationshipsStructureRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type EntryResourceEntryRelationshipsStructureRelationship struct {
	Data  *interface{}                                                           `json:"data,omitempty"`
	Links *EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                 `json:"meta,omitempty"`
}

// EntryResourceEntryRelationships
// This model wraps the JSON API Relationships to include type-specific top level keys.
type EntryResourceEntryRelationships struct {
	References *EntryResourceEntryRelationshipsReferenceRelationship `json:"references,omitempty"`
	Structures *EntryResourceEntryRelationshipsStructureRelationship `json:"structures,omitempty"`
}

// EntryResource
// The base model for an entry resource.
type EntryResource struct {
	Attributes    EntryResourceEntryResourceAttributes `json:"attributes"`
	ID            string                               `json:"id"`
	Links         *EntryResourceResourceLinks          `json:"links,omitempty"`
	Meta          map[string]interface{}               `json:"meta,omitempty"`
	Relationships *EntryResourceEntryRelationships     `json:"relationships,omitempty"`
	Type          string                               `json:"type"`
}
