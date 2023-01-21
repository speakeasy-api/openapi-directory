package shared

// RegisterDomainRequest
// Defines the parameters that can be included in the body of
// a request to the [RegisterDomain](https://developer.squareup.com/reference/square_2021-08-18/apple-pay-api/register-domain) endpoint.
type RegisterDomainRequest struct {
	DomainName string `json:"domain_name"`
}
