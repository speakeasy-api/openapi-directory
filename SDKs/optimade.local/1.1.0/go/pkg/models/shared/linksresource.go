package shared

// LinksResourceLinksResourceAttributes
// Links endpoint resource object attributes
type LinksResourceLinksResourceAttributes struct {
	Aggregate         map[string]interface{} `json:"aggregate,omitempty"`
	BaseURL           interface{}            `json:"base_url"`
	Description       string                 `json:"description"`
	Homepage          interface{}            `json:"homepage"`
	LinkType          map[string]interface{} `json:"link_type"`
	Name              string                 `json:"name"`
	NoAggregateReason *string                `json:"no_aggregate_reason,omitempty"`
}

// LinksResourceResourceLinks
// A Resource Links object
type LinksResourceResourceLinks struct {
	Self *interface{} `json:"self,omitempty"`
}

// LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// LinksResourceEntryRelationshipsReferenceRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type LinksResourceEntryRelationshipsReferenceRelationship struct {
	Data  *interface{}                                                           `json:"data,omitempty"`
	Links *LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                 `json:"meta,omitempty"`
}

// LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// LinksResourceEntryRelationshipsStructureRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type LinksResourceEntryRelationshipsStructureRelationship struct {
	Data  *interface{}                                                           `json:"data,omitempty"`
	Links *LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                 `json:"meta,omitempty"`
}

// LinksResourceEntryRelationships
// This model wraps the JSON API Relationships to include type-specific top level keys.
type LinksResourceEntryRelationships struct {
	References *LinksResourceEntryRelationshipsReferenceRelationship `json:"references,omitempty"`
	Structures *LinksResourceEntryRelationshipsStructureRelationship `json:"structures,omitempty"`
}

// LinksResource
// A Links endpoint resource object
type LinksResource struct {
	Attributes    LinksResourceLinksResourceAttributes `json:"attributes"`
	ID            string                               `json:"id"`
	Links         *LinksResourceResourceLinks          `json:"links,omitempty"`
	Meta          map[string]interface{}               `json:"meta,omitempty"`
	Relationships *LinksResourceEntryRelationships     `json:"relationships,omitempty"`
	Type          string                               `json:"type"`
}
