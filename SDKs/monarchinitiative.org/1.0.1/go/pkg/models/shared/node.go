package shared

type Node struct {
	ID    string  `json:"id"`
	Label *string `json:"label,omitempty"`
}
