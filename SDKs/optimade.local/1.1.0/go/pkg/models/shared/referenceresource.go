package shared

// ReferenceResourceResourceLinks
// A Resource Links object
type ReferenceResourceResourceLinks struct {
	Self *interface{} `json:"self,omitempty"`
}

// ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// ReferenceResourceEntryRelationshipsReferenceRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type ReferenceResourceEntryRelationshipsReferenceRelationship struct {
	Data  *interface{}                                                               `json:"data,omitempty"`
	Links *ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                     `json:"meta,omitempty"`
}

// ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks
// A resource object **MAY** contain references to other resource objects ("relationships").
// Relationships may be to-one or to-many.
// Relationships can be specified by including a member in a resource's links object.
type ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks struct {
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// ReferenceResourceEntryRelationshipsStructureRelationship
// Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
type ReferenceResourceEntryRelationshipsStructureRelationship struct {
	Data  *interface{}                                                               `json:"data,omitempty"`
	Links *ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks `json:"links,omitempty"`
	Meta  map[string]interface{}                                                     `json:"meta,omitempty"`
}

// ReferenceResourceEntryRelationships
// This model wraps the JSON API Relationships to include type-specific top level keys.
type ReferenceResourceEntryRelationships struct {
	References *ReferenceResourceEntryRelationshipsReferenceRelationship `json:"references,omitempty"`
	Structures *ReferenceResourceEntryRelationshipsStructureRelationship `json:"structures,omitempty"`
}

// ReferenceResource
// The `references` entries describe bibliographic references.
//
// The following properties are used to provide the bibliographic details:
//
// - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
// - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
// - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
//   - **name**: Full name of the person, REQUIRED.
//   - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
//
// - **doi** and **url**: values are strings.
// - **Requirements/Conventions**:
//   - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
//   - **Query**: Support for queries on any of these properties is OPTIONAL.
//     If supported, filters MAY support only a subset of comparison operators.
//   - Every references entry MUST contain at least one of the properties.
type ReferenceResource struct {
	Attributes    ReferenceResourceAttributes          `json:"attributes"`
	ID            string                               `json:"id"`
	Links         *ReferenceResourceResourceLinks      `json:"links,omitempty"`
	Meta          map[string]interface{}               `json:"meta,omitempty"`
	Relationships *ReferenceResourceEntryRelationships `json:"relationships,omitempty"`
	Type          string                               `json:"type"`
}
