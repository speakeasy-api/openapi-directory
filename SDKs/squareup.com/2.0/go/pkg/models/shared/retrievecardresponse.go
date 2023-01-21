package shared

// RetrieveCardResponse
// Defines the fields that are included in the response body of
// a request to the [RetrieveCard](#endpoint-cards-retrievecard) endpoint.
//
// Note: if there are errors processing the request, the card field will not be
// present.
type RetrieveCardResponse struct {
	Card   *Card   `json:"card,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
