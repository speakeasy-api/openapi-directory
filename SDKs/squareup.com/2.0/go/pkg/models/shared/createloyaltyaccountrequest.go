package shared

// CreateLoyaltyAccountRequest
// A request to create a new loyalty account.
type CreateLoyaltyAccountRequest struct {
	IdempotencyKey string         `json:"idempotency_key"`
	LoyaltyAccount LoyaltyAccount `json:"loyalty_account"`
}
