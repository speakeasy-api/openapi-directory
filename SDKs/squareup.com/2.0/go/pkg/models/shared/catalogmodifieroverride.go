package shared

// CatalogModifierOverride
// Options to control how to override the default behavior of the specified modifier.
type CatalogModifierOverride struct {
	ModifierID  string `json:"modifier_id"`
	OnByDefault *bool  `json:"on_by_default,omitempty"`
}
