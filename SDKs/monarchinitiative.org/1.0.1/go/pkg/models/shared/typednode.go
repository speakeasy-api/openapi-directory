package shared

type TypedNode struct {
	ID    string  `json:"id"`
	Label *string `json:"label,omitempty"`
	Taxon *Node   `json:"taxon,omitempty"`
	Type  *string `json:"type,omitempty"`
}
