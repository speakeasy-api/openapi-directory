package shared

// CreateGiftCardActivityRequest
// A request to create a gift card activity.
type CreateGiftCardActivityRequest struct {
	GiftCardActivity GiftCardActivity `json:"gift_card_activity"`
	IdempotencyKey   string           `json:"idempotency_key"`
}
