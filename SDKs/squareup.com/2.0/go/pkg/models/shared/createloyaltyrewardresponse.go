package shared

// CreateLoyaltyRewardResponse
// A response that includes the loyalty reward created.
type CreateLoyaltyRewardResponse struct {
	Errors []Error        `json:"errors,omitempty"`
	Reward *LoyaltyReward `json:"reward,omitempty"`
}
