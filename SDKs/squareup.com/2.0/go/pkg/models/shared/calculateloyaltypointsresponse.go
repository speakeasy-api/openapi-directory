package shared

// CalculateLoyaltyPointsResponse
// A response that includes the points that the buyer can earn from
// a specified purchase.
type CalculateLoyaltyPointsResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Points *int64  `json:"points,omitempty"`
}
