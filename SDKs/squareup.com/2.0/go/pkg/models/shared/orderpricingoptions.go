package shared

// OrderPricingOptions
// Pricing options for an order. The options affect how the order's price is calculated.
// They can be used, for example, to apply automatic price adjustments that are based on preconfigured
// [pricing rules](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogPricingRule).
type OrderPricingOptions struct {
	AutoApplyDiscounts *bool `json:"auto_apply_discounts,omitempty"`
	AutoApplyTaxes     *bool `json:"auto_apply_taxes,omitempty"`
}
