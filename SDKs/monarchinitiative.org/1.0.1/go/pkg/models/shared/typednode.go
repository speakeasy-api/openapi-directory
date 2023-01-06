package shared

type TypedNode struct {
	Taxon *Node   `json:"taxon,omitempty"`
	Type  *string `json:"type,omitempty"`
}
