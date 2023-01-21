package shared

// LoyaltyEventDeleteReward
// Provides metadata when the event `type` is `DELETE_REWARD`.
type LoyaltyEventDeleteReward struct {
	LoyaltyProgramID string  `json:"loyalty_program_id"`
	Points           int64   `json:"points"`
	RewardID         *string `json:"reward_id,omitempty"`
}
