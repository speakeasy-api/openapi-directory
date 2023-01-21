package shared

// RetrieveGiftCardFromNonceResponse
// A response that contains a `GiftCard`. The response might contain a set of `Error` objects
// if the request resulted in errors.
type RetrieveGiftCardFromNonceResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	GiftCard *GiftCard `json:"gift_card,omitempty"`
}
