package shared

// CreateGiftCardResponse
// A response that contains a `GiftCard`. The response might contain a set of `Error` objects if the request
// resulted in errors.
type CreateGiftCardResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	GiftCard *GiftCard `json:"gift_card,omitempty"`
}
