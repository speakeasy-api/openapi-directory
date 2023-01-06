package shared

// ConnectRoyalMailRequestBody
// A Royal Mail account information request body
type ConnectRoyalMailRequestBody struct {
	AccountNumber string  `json:"account_number"`
	City          string  `json:"city"`
	CompanyName   *string `json:"company_name,omitempty"`
	ContactName   string  `json:"contact_name"`
	Email         *string `json:"email,omitempty"`
	Nickname      string  `json:"nickname"`
	ObaEmail      *string `json:"oba_email,omitempty"`
	Phone         *string `json:"phone,omitempty"`
	PostalCode    string  `json:"postal_code"`
	StreetLine1   *string `json:"street_line1,omitempty"`
	StreetLine2   *string `json:"street_line2,omitempty"`
	StreetLine3   *string `json:"street_line3,omitempty"`
}
