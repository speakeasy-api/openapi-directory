package shared

type AssociationResults5 struct {
	Associations        []Association5          `json:"associations,omitempty"`
	CompactAssociations []CompactAssociationSet `json:"compact_associations,omitempty"`
	Objects             []string                `json:"objects,omitempty"`
}
