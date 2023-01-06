package shared

type SimMatch struct {
	PairwiseMatch []PairwiseMatch `json:"pairwise_match,omitempty"`
	Rank          *string         `json:"rank,omitempty"`
	Score         *float64        `json:"score,omitempty"`
	Significance  *string         `json:"significance,omitempty"`
}
