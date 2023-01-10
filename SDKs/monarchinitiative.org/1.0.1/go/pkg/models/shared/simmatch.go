package shared

type SimMatch struct {
	ID            string          `json:"id"`
	Label         *string         `json:"label,omitempty"`
	PairwiseMatch []PairwiseMatch `json:"pairwise_match,omitempty"`
	Rank          *string         `json:"rank,omitempty"`
	Score         *float64        `json:"score,omitempty"`
	Significance  *string         `json:"significance,omitempty"`
	Taxon         *Node           `json:"taxon,omitempty"`
	Type          *string         `json:"type,omitempty"`
}
