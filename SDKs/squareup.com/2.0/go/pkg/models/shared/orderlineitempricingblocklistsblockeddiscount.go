package shared

// OrderLineItemPricingBlocklistsBlockedDiscount
// A discount to block from applying to a line item. The discount must be
// identified by either `discount_uid` or `discount_catalog_object_id`, but not both.
type OrderLineItemPricingBlocklistsBlockedDiscount struct {
	DiscountCatalogObjectID *string `json:"discount_catalog_object_id,omitempty"`
	DiscountUID             *string `json:"discount_uid,omitempty"`
	UID                     *string `json:"uid,omitempty"`
}
