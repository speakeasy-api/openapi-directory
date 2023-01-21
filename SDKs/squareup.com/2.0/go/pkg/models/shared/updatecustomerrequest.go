package shared

// UpdateCustomerRequest
// Defines the body parameters that can be included in a request to the
// `UpdateCustomer` endpoint.
type UpdateCustomerRequest struct {
	Address      *Address `json:"address,omitempty"`
	Birthday     *string  `json:"birthday,omitempty"`
	CompanyName  *string  `json:"company_name,omitempty"`
	EmailAddress *string  `json:"email_address,omitempty"`
	FamilyName   *string  `json:"family_name,omitempty"`
	GivenName    *string  `json:"given_name,omitempty"`
	Nickname     *string  `json:"nickname,omitempty"`
	Note         *string  `json:"note,omitempty"`
	PhoneNumber  *string  `json:"phone_number,omitempty"`
	ReferenceID  *string  `json:"reference_id,omitempty"`
	Version      *int64   `json:"version,omitempty"`
}
