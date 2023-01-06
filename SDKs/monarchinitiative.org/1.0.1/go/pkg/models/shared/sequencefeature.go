package shared

type SequenceFeature struct {
	HomologyAssociations []Association      `json:"homology_associations,omitempty"`
	Locations            []SequenceLocation `json:"locations,omitempty"`
	Seq                  *Seq               `json:"seq,omitempty"`
}
