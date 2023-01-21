package shared

// RegisterDomainResponse
// Defines the fields that are included in the response body of
// a request to the [RegisterDomain](https://developer.squareup.com/reference/square_2021-08-18/apple-pay-api/register-domain) endpoint.
//
// Either `errors` or `status` are present in a given response (never both).
type RegisterDomainResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Status *string `json:"status,omitempty"`
}
