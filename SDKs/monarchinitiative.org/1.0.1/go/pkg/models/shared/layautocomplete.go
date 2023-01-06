package shared

type LayAutocomplete struct {
	Highlight      *string `json:"highlight,omitempty"`
	ID             *string `json:"id,omitempty"`
	Label          *string `json:"label,omitempty"`
	MatchedSynonym *string `json:"matched_synonym,omitempty"`
}
