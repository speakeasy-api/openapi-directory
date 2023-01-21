package shared

// OrderLineItemDiscount
// Represents a discount that applies to one or more line items in an
// order.
//
// Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals.
// The amount distributed to each line item is relative to the
// amount contributed by the item to the order subtotal.
type OrderLineItemDiscount struct {
	AmountMoney     *Money            `json:"amount_money,omitempty"`
	AppliedMoney    *Money            `json:"applied_money,omitempty"`
	CatalogObjectID *string           `json:"catalog_object_id,omitempty"`
	CatalogVersion  *int64            `json:"catalog_version,omitempty"`
	Metadata        map[string]string `json:"metadata,omitempty"`
	Name            *string           `json:"name,omitempty"`
	Percentage      *string           `json:"percentage,omitempty"`
	PricingRuleID   *string           `json:"pricing_rule_id,omitempty"`
	RewardIds       []string          `json:"reward_ids,omitempty"`
	Scope           *string           `json:"scope,omitempty"`
	Type            *string           `json:"type,omitempty"`
	UID             *string           `json:"uid,omitempty"`
}
