package shared

// LoyaltyEventCreateReward
// Provides metadata when the event `type` is `CREATE_REWARD`.
type LoyaltyEventCreateReward struct {
	LoyaltyProgramID string  `json:"loyalty_program_id"`
	Points           int64   `json:"points"`
	RewardID         *string `json:"reward_id,omitempty"`
}
