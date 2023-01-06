package shared

type Token struct {
	Category []string `json:"category,omitempty"`
	ID       *string  `json:"id,omitempty"`
	Terms    []string `json:"terms,omitempty"`
}
