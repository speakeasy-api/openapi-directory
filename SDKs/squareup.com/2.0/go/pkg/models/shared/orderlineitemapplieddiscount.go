package shared

// OrderLineItemAppliedDiscount
// Represents an applied portion of a discount to a line item in an order.
//
// Order scoped discounts have automatically applied discounts present for each line item.
// Line-item scoped discounts must have applied discounts added manually for any applicable line
// items. The corresponding applied money is automatically computed based on participating
// line items.
type OrderLineItemAppliedDiscount struct {
	AppliedMoney *Money  `json:"applied_money,omitempty"`
	DiscountUID  string  `json:"discount_uid"`
	UID          *string `json:"uid,omitempty"`
}
