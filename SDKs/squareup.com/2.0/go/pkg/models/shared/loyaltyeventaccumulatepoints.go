package shared

// LoyaltyEventAccumulatePoints
// Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
type LoyaltyEventAccumulatePoints struct {
	LoyaltyProgramID *string `json:"loyalty_program_id,omitempty"`
	OrderID          *string `json:"order_id,omitempty"`
	Points           *int64  `json:"points,omitempty"`
}
