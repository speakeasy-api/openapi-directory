// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type SimMatch struct {
	// ID or CURIE e.g. MGI:1201606
	ID string `json:"id"`
	// RDFS Label
	Label         *string         `json:"label,omitempty"`
	PairwiseMatch []PairwiseMatch `json:"pairwise_match,omitempty"`
	// rank
	Rank *string `json:"rank,omitempty"`
	// sim score
	Score *float64 `json:"score,omitempty"`
	// p-value
	Significance *string `json:"significance,omitempty"`
	// taxon
	Taxon *Node `json:"taxon,omitempty"`
	// node type (eg phenotype, disease)
	Type *string `json:"type,omitempty"`
}
