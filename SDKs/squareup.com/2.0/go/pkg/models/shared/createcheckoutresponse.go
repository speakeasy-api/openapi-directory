package shared

// CreateCheckoutResponse
// Defines the fields that are included in the response body of
// a request to the `CreateCheckout` endpoint.
type CreateCheckoutResponse struct {
	Checkout *Checkout `json:"checkout,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
