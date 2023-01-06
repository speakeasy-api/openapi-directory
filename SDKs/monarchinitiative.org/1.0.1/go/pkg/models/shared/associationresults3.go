package shared

type AssociationResults3 struct {
	Associations        []Association3          `json:"associations,omitempty"`
	CompactAssociations []CompactAssociationSet `json:"compact_associations,omitempty"`
	Objects             []string                `json:"objects,omitempty"`
}
