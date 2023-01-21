package shared

// OrderReward
// Represents a reward that can be applied to an order if the necessary
// reward tier criteria are met. Rewards are created through the Loyalty API.
type OrderReward struct {
	ID           string `json:"id"`
	RewardTierID string `json:"reward_tier_id"`
}
