package shared

// AccumulateLoyaltyPointsResponse
// A response containing the resulting loyalty event.
type AccumulateLoyaltyPointsResponse struct {
	Errors []Error       `json:"errors,omitempty"`
	Event  *LoyaltyEvent `json:"event,omitempty"`
}
