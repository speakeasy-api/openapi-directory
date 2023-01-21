package shared

// AccumulateLoyaltyPointsRequest
// A request to accumulate points for a purchase.
type AccumulateLoyaltyPointsRequest struct {
	AccumulatePoints LoyaltyEventAccumulatePoints `json:"accumulate_points"`
	IdempotencyKey   string                       `json:"idempotency_key"`
	LocationID       string                       `json:"location_id"`
}
