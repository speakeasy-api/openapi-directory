package shared

// LoyaltyEventRedeemReward
// Provides metadata when the event `type` is `REDEEM_REWARD`.
type LoyaltyEventRedeemReward struct {
	LoyaltyProgramID string  `json:"loyalty_program_id"`
	OrderID          *string `json:"order_id,omitempty"`
	RewardID         *string `json:"reward_id,omitempty"`
}
