package shared

// CatalogQueryItemsForModifierList
// The query filter to return the items containing the specified modifier list IDs.
type CatalogQueryItemsForModifierList struct {
	ModifierListIds []string `json:"modifier_list_ids"`
}
