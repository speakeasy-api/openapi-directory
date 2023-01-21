package shared

// OrderReturnTax
// Represents a tax being returned that applies to one or more return line items in an order.
//
// Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals.
// The amount distributed to each return line item is relative to that item’s contribution to the
// order subtotal.
type OrderReturnTax struct {
	AppliedMoney    *Money  `json:"applied_money,omitempty"`
	CatalogObjectID *string `json:"catalog_object_id,omitempty"`
	CatalogVersion  *int64  `json:"catalog_version,omitempty"`
	Name            *string `json:"name,omitempty"`
	Percentage      *string `json:"percentage,omitempty"`
	Scope           *string `json:"scope,omitempty"`
	SourceTaxUID    *string `json:"source_tax_uid,omitempty"`
	Type            *string `json:"type,omitempty"`
	UID             *string `json:"uid,omitempty"`
}
