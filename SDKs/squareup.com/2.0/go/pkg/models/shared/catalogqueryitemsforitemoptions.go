package shared

// CatalogQueryItemsForItemOptions
// The query filter to return the items containing the specified item option IDs.
type CatalogQueryItemsForItemOptions struct {
	ItemOptionIds []string `json:"item_option_ids,omitempty"`
}
