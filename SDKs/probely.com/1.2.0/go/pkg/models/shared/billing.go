package shared

type Billing struct {
	Address   string  `json:"address"`
	City      string  `json:"city"`
	Country   string  `json:"country"`
	Email     string  `json:"email"`
	FirstName string  `json:"first_name"`
	LastName  string  `json:"last_name"`
	Other     *string `json:"other,omitempty"`
	RegNumber *string `json:"reg_number,omitempty"`
	VatNumber string  `json:"vat_number"`
	Zip       string  `json:"zip"`
}
