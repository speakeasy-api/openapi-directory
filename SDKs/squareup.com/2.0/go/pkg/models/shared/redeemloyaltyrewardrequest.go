package shared

// RedeemLoyaltyRewardRequest
// A request to redeem a loyalty reward.
type RedeemLoyaltyRewardRequest struct {
	IdempotencyKey string `json:"idempotency_key"`
	LocationID     string `json:"location_id"`
}
