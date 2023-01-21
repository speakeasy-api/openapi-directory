package shared

// AdjustLoyaltyPointsResponse
// A response that includes the loyalty event that
// resulted from the successful API call.
type AdjustLoyaltyPointsResponse struct {
	Errors []Error       `json:"errors,omitempty"`
	Event  *LoyaltyEvent `json:"event,omitempty"`
}
