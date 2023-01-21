package shared

// UnlinkCustomerFromGiftCardResponse
// A response that contains one `GiftCard` that was unlinked. The response might contain a set of `Error`
// objects if the request resulted in errors.
type UnlinkCustomerFromGiftCardResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	GiftCard *GiftCard `json:"gift_card,omitempty"`
}
