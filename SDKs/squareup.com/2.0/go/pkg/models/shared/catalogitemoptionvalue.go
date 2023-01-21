package shared

// CatalogItemOptionValue
// An enumerated value that can link a
// `CatalogItemVariation` to an item option as one of
// its item option values.
type CatalogItemOptionValue struct {
	Color        *string `json:"color,omitempty"`
	Description  *string `json:"description,omitempty"`
	ItemOptionID *string `json:"item_option_id,omitempty"`
	Name         *string `json:"name,omitempty"`
	Ordinal      *int64  `json:"ordinal,omitempty"`
}
