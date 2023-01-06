package shared

type NamedObject2 struct {
	Category []string `json:"category,omitempty"`
	ID       string   `json:"id"`
	Iri      *string  `json:"iri,omitempty"`
	Label    *string  `json:"label,omitempty"`
}
