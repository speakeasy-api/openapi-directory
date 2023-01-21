package shared

// RedeemLoyaltyRewardResponse
// A response that includes the `LoyaltyEvent` published for redeeming the reward.
type RedeemLoyaltyRewardResponse struct {
	Errors []Error       `json:"errors,omitempty"`
	Event  *LoyaltyEvent `json:"event,omitempty"`
}
