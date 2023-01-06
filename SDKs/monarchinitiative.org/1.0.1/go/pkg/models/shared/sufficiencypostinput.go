package shared

type SufficiencyPostInput struct {
	Features []Feature `json:"features,omitempty"`
	ID       *string   `json:"id,omitempty"`
}
