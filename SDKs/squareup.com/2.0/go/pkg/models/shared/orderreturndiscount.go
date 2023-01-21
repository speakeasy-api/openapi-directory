package shared

// OrderReturnDiscount
// Represents a discount being returned that applies to one or more return line items in an
// order.
//
// Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
// The amount distributed to each return line item is relative to that item’s contribution to the
// order subtotal.
type OrderReturnDiscount struct {
	AmountMoney       *Money  `json:"amount_money,omitempty"`
	AppliedMoney      *Money  `json:"applied_money,omitempty"`
	CatalogObjectID   *string `json:"catalog_object_id,omitempty"`
	CatalogVersion    *int64  `json:"catalog_version,omitempty"`
	Name              *string `json:"name,omitempty"`
	Percentage        *string `json:"percentage,omitempty"`
	Scope             *string `json:"scope,omitempty"`
	SourceDiscountUID *string `json:"source_discount_uid,omitempty"`
	Type              *string `json:"type,omitempty"`
	UID               *string `json:"uid,omitempty"`
}
