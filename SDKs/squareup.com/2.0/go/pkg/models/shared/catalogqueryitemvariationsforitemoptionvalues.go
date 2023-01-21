package shared

// CatalogQueryItemVariationsForItemOptionValues
// The query filter to return the item variations containing the specified item option value IDs.
type CatalogQueryItemVariationsForItemOptionValues struct {
	ItemOptionValueIds []string `json:"item_option_value_ids,omitempty"`
}
