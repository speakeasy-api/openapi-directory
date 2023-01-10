package shared

type RelationRef struct {
	Category []string `json:"category,omitempty"`
	ID       string   `json:"id"`
	Inverse  *bool    `json:"inverse,omitempty"`
	Iri      *string  `json:"iri,omitempty"`
	Label    *string  `json:"label,omitempty"`
}
