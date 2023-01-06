package shared

type AssociationResults struct {
	Associations        []Association           `json:"associations,omitempty"`
	CompactAssociations []CompactAssociationSet `json:"compact_associations,omitempty"`
	Objects             []string                `json:"objects,omitempty"`
}
