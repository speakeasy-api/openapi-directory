package shared

// ListCardsResponse
// Defines the fields that are included in the response body of
// a request to the [ListCards](#endpoint-cards-listcards) endpoint.
//
// Note: if there are errors processing the request, the card field will not be
// present.
type ListCardsResponse struct {
	Cards  []Card  `json:"cards,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
