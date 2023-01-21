package shared

// CatalogQueryItemsForTax
// The query filter to return the items containing the specified tax IDs.
type CatalogQueryItemsForTax struct {
	TaxIds []string `json:"tax_ids"`
}
