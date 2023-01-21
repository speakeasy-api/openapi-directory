package shared

// CatalogItemOptionForItem
//
//	An option that can be assigned to an item.
//
// For example, a t-shirt item may offer a color option or a size option.
type CatalogItemOptionForItem struct {
	ItemOptionID *string `json:"item_option_id,omitempty"`
}
