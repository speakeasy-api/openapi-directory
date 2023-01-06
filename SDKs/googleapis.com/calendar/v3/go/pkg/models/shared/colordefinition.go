package shared

// ColorDefinition
// A calendar color definition.
type ColorDefinition struct {
	Background *string `json:"background,omitempty"`
	Foreground *string `json:"foreground,omitempty"`
}
