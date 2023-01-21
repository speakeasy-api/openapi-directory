package shared

// LoyaltyEventDateTimeFilter
// Filter events by date time range.
type LoyaltyEventDateTimeFilter struct {
	CreatedAt TimeRange `json:"created_at"`
}
