package shared

// OrderLineItemAppliedTax
// Represents an applied portion of a tax to a line item in an order.
//
// Order-scoped taxes automatically include the applied taxes in each line item.
// Line item taxes must be referenced from any applicable line items.
// The corresponding applied money is automatically computed, based on the
// set of participating line items.
type OrderLineItemAppliedTax struct {
	AppliedMoney *Money  `json:"applied_money,omitempty"`
	TaxUID       string  `json:"tax_uid"`
	UID          *string `json:"uid,omitempty"`
}
