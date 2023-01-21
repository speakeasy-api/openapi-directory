package shared

// CreateCardRequest
// Creates a card from the source (nonce, payment id, etc). Accessible via
// HTTP requests at POST https://connect.squareup.com/v2/cards
type CreateCardRequest struct {
	Card              Card    `json:"card"`
	IdempotencyKey    string  `json:"idempotency_key"`
	SourceID          string  `json:"source_id"`
	VerificationToken *string `json:"verification_token,omitempty"`
}
