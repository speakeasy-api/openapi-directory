package shared

type BioObjectCore struct {
	Category []string `json:"category,omitempty"`
	ID       string   `json:"id"`
	Iri      *string  `json:"iri,omitempty"`
	Label    *string  `json:"label,omitempty"`
	Taxon    *Taxon   `json:"taxon,omitempty"`
}
