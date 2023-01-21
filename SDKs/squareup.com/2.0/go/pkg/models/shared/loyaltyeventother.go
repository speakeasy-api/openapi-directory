package shared

// LoyaltyEventOther
// Provides metadata when the event `type` is `OTHER`.
type LoyaltyEventOther struct {
	LoyaltyProgramID string `json:"loyalty_program_id"`
	Points           int64  `json:"points"`
}
