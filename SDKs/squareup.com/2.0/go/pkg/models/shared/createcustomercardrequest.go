package shared

// CreateCustomerCardRequest
// Defines the fields that are included in the request body of a request
// to the `CreateCustomerCard` endpoint.
type CreateCustomerCardRequest struct {
	BillingAddress    *Address `json:"billing_address,omitempty"`
	CardNonce         string   `json:"card_nonce"`
	CardholderName    *string  `json:"cardholder_name,omitempty"`
	VerificationToken *string  `json:"verification_token,omitempty"`
}
