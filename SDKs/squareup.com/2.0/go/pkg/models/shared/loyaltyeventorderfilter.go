package shared

// LoyaltyEventOrderFilter
// Filter events by the order associated with the event.
type LoyaltyEventOrderFilter struct {
	OrderID string `json:"order_id"`
}
