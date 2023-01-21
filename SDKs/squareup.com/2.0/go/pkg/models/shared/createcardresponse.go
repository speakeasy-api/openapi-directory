package shared

// CreateCardResponse
// Defines the fields that are included in the response body of
// a request to the [CreateCard](#endpoint-cards-createcard) endpoint.
//
// Note: if there are errors processing the request, the card field will not be
// present.
type CreateCardResponse struct {
	Card   *Card   `json:"card,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
