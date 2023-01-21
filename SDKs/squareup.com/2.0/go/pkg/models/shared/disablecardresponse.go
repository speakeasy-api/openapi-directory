package shared

// DisableCardResponse
// Defines the fields that are included in the response body of
// a request to the [DisableCard](#endpoint-cards-disablecard) endpoint.
//
// Note: if there are errors processing the request, the card field will not be
// present.
type DisableCardResponse struct {
	Card   *Card   `json:"card,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
