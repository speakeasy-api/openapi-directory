package shared

// OrderLineItemPricingBlocklistsBlockedTax
// A tax to block from applying to a line item. The tax must be
// identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
type OrderLineItemPricingBlocklistsBlockedTax struct {
	TaxCatalogObjectID *string `json:"tax_catalog_object_id,omitempty"`
	TaxUID             *string `json:"tax_uid,omitempty"`
	UID                *string `json:"uid,omitempty"`
}
