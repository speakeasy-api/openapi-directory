package shared

// AdjustLoyaltyPointsRequest
// A request to adjust (add or subtract) points manually.
type AdjustLoyaltyPointsRequest struct {
	AdjustPoints   LoyaltyEventAdjustPoints `json:"adjust_points"`
	IdempotencyKey string                   `json:"idempotency_key"`
}
