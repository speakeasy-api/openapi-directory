package shared

// RetrieveLoyaltyRewardResponse
// A response that includes the loyalty reward.
type RetrieveLoyaltyRewardResponse struct {
	Errors []Error        `json:"errors,omitempty"`
	Reward *LoyaltyReward `json:"reward,omitempty"`
}
