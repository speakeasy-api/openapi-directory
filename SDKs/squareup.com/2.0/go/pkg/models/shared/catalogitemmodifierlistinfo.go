package shared

// CatalogItemModifierListInfo
// Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance.
type CatalogItemModifierListInfo struct {
	Enabled              *bool                     `json:"enabled,omitempty"`
	MaxSelectedModifiers *int64                    `json:"max_selected_modifiers,omitempty"`
	MinSelectedModifiers *int64                    `json:"min_selected_modifiers,omitempty"`
	ModifierListID       string                    `json:"modifier_list_id"`
	ModifierOverrides    []CatalogModifierOverride `json:"modifier_overrides,omitempty"`
}
