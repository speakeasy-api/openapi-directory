package shared

// LinkCustomerToGiftCardResponse
// A response that contains one `GiftCard` that was linked. The response might contain a set of `Error`
// objects if the request resulted in errors.
type LinkCustomerToGiftCardResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	GiftCard *GiftCard `json:"gift_card,omitempty"`
}
