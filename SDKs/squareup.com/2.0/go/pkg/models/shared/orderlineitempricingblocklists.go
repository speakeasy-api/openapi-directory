package shared

// OrderLineItemPricingBlocklists
// Describes pricing adjustments that are blocked from manual and
// automatic application to a line item. For more information, see
// [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
type OrderLineItemPricingBlocklists struct {
	BlockedDiscounts []OrderLineItemPricingBlocklistsBlockedDiscount `json:"blocked_discounts,omitempty"`
	BlockedTaxes     []OrderLineItemPricingBlocklistsBlockedTax      `json:"blocked_taxes,omitempty"`
}
