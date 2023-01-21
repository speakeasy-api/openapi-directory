package shared

// ModelDescription
// An object describing supported model by name and categories.
type ModelDescription struct {
	Categories []string `json:"categories,omitempty"`
	Name       *string  `json:"name,omitempty"`
}
