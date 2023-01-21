package shared

// CatalogItemOptionValueForItemVariation
// A `CatalogItemOptionValue` links an item variation to an item option as
// an item option value. For example, a t-shirt item may offer a color option and
// a size option. An item option value would represent each variation of t-shirt:
// For example, "Color:Red, Size:Small" or "Color:Blue, Size:Medium".
type CatalogItemOptionValueForItemVariation struct {
	ItemOptionID      *string `json:"item_option_id,omitempty"`
	ItemOptionValueID *string `json:"item_option_value_id,omitempty"`
}
