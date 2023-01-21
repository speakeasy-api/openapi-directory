package shared

// CreateLoyaltyRewardRequest
// A request to create a loyalty reward.
type CreateLoyaltyRewardRequest struct {
	IdempotencyKey string        `json:"idempotency_key"`
	Reward         LoyaltyReward `json:"reward"`
}
