package shared

// ConnectFedexRequestBody
// A Fedex account information request body
type ConnectFedexRequestBody struct {
	AccountNumber string  `json:"account_number"`
	Address1      string  `json:"address1"`
	Address2      *string `json:"address2,omitempty"`
	AgreeToEula   bool    `json:"agree_to_eula"`
	City          string  `json:"city"`
	Company       *string `json:"company,omitempty"`
	CountryCode   string  `json:"country_code"`
	Email         string  `json:"email"`
	FirstName     string  `json:"first_name"`
	LastName      string  `json:"last_name"`
	MeterNumber   *string `json:"meter_number,omitempty"`
	Nickname      string  `json:"nickname"`
	Phone         string  `json:"phone"`
	PostalCode    string  `json:"postal_code"`
	State         string  `json:"state"`
}
