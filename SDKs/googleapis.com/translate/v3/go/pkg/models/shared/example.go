package shared

// Example
// A sentence pair.
type Example struct {
	Name       *string `json:"name,omitempty"`
	SourceText *string `json:"sourceText,omitempty"`
	TargetText *string `json:"targetText,omitempty"`
	Usage      *string `json:"usage,omitempty"`
}
