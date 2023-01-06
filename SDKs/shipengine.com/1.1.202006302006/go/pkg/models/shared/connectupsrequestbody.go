package shared

// ConnectUpsRequestBody
// A UPS account information request body
type ConnectUpsRequestBody struct {
	AccountCountryCode         string      `json:"account_country_code"`
	AccountNumber              string      `json:"account_number"`
	AccountPostalCode          string      `json:"account_postal_code"`
	Address1                   string      `json:"address1"`
	Address2                   *string     `json:"address2,omitempty"`
	AgreeToTechnologyAgreement bool        `json:"agree_to_technology_agreement"`
	City                       string      `json:"city"`
	Company                    string      `json:"company"`
	CountryCode                string      `json:"country_code"`
	Email                      string      `json:"email"`
	FirstName                  string      `json:"first_name"`
	Invoice                    *UpsInvoice `json:"invoice,omitempty"`
	LastName                   string      `json:"last_name"`
	Nickname                   string      `json:"nickname"`
	Phone                      string      `json:"phone"`
	PostalCode                 string      `json:"postal_code"`
	State                      string      `json:"state"`
	Title                      *string     `json:"title,omitempty"`
}
