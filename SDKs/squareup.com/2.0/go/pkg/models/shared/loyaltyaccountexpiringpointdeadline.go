package shared

// LoyaltyAccountExpiringPointDeadline
// Represents a set of points for a loyalty account that are scheduled to expire on a specific date.
type LoyaltyAccountExpiringPointDeadline struct {
	ExpiresAt string `json:"expires_at"`
	Points    int64  `json:"points"`
}
