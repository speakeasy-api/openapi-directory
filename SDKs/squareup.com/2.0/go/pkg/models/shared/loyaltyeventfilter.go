package shared

// LoyaltyEventFilter
// The filtering criteria. If the request specifies multiple filters,
// the endpoint uses a logical AND to evaluate them.
type LoyaltyEventFilter struct {
	DateTimeFilter       *LoyaltyEventDateTimeFilter       `json:"date_time_filter,omitempty"`
	LocationFilter       *LoyaltyEventLocationFilter       `json:"location_filter,omitempty"`
	LoyaltyAccountFilter *LoyaltyEventLoyaltyAccountFilter `json:"loyalty_account_filter,omitempty"`
	OrderFilter          *LoyaltyEventOrderFilter          `json:"order_filter,omitempty"`
	TypeFilter           *LoyaltyEventTypeFilter           `json:"type_filter,omitempty"`
}
