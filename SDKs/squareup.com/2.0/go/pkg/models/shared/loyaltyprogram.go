package shared

// LoyaltyProgram
// Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
// Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
// For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
type LoyaltyProgram struct {
	AccrualRules     []LoyaltyProgramAccrualRule     `json:"accrual_rules"`
	CreatedAt        string                          `json:"created_at"`
	ExpirationPolicy *LoyaltyProgramExpirationPolicy `json:"expiration_policy,omitempty"`
	ID               string                          `json:"id"`
	LocationIds      []string                        `json:"location_ids"`
	RewardTiers      []LoyaltyProgramRewardTier      `json:"reward_tiers"`
	Status           string                          `json:"status"`
	Terminology      LoyaltyProgramTerminology       `json:"terminology"`
	UpdatedAt        string                          `json:"updated_at"`
}
