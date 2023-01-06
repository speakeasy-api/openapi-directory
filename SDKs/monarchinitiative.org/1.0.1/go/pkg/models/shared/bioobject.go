package shared

type BioObject struct {
	AssociationCounts map[string]interface{} `json:"association_counts,omitempty"`
	Taxon             *Taxon                 `json:"taxon,omitempty"`
	Xrefs             []string               `json:"xrefs,omitempty"`
}
