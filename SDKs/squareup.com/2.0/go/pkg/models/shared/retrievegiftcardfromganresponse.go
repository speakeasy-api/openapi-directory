package shared

// RetrieveGiftCardFromGanResponse
// A response that contains a `GiftCard`. This response might contain a set of `Error` objects
// if the request resulted in errors.
type RetrieveGiftCardFromGanResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	GiftCard *GiftCard `json:"gift_card,omitempty"`
}
