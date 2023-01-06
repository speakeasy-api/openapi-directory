package shared

type D2PAssociationResults struct {
	Associations        []D2PAssociation        `json:"associations,omitempty"`
	CompactAssociations []CompactAssociationSet `json:"compact_associations,omitempty"`
	Objects             []string                `json:"objects,omitempty"`
}
