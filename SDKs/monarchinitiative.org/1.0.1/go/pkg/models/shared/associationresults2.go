package shared

type AssociationResults2 struct {
	Associations        []Association2          `json:"associations,omitempty"`
	CompactAssociations []CompactAssociationSet `json:"compact_associations,omitempty"`
	Objects             []string                `json:"objects,omitempty"`
}
