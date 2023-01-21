package shared

// LoyaltyEventExpirePoints
// Provides metadata when the event `type` is `EXPIRE_POINTS`.
type LoyaltyEventExpirePoints struct {
	LoyaltyProgramID string `json:"loyalty_program_id"`
	Points           int64  `json:"points"`
}
