package shared

// ListGiftCardsResponse
// A response that contains one or more `GiftCard`. The response might contain a set of `Error`
// objects if the request resulted in errors.
type ListGiftCardsResponse struct {
	Cursor    *string    `json:"cursor,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
	GiftCards []GiftCard `json:"gift_cards,omitempty"`
}
