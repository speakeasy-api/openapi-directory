package shared

// CreateGiftCardActivityResponse
// A response that contains a `GiftCardActivity` that was created.
// The response might contain a set of `Error` objects if the request resulted in errors.
type CreateGiftCardActivityResponse struct {
	Errors           []Error           `json:"errors,omitempty"`
	GiftCardActivity *GiftCardActivity `json:"gift_card_activity,omitempty"`
}
