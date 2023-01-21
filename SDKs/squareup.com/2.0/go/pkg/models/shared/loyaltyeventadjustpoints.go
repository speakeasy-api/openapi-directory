package shared

// LoyaltyEventAdjustPoints
// Provides metadata when the event `type` is `ADJUST_POINTS`.
type LoyaltyEventAdjustPoints struct {
	LoyaltyProgramID *string `json:"loyalty_program_id,omitempty"`
	Points           int64   `json:"points"`
	Reason           *string `json:"reason,omitempty"`
}
