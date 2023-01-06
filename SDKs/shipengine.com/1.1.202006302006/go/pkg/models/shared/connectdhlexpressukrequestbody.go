package shared

// ConnectDhlExpressUkRequestBody
// A DHL Express UK account information request body
type ConnectDhlExpressUkRequestBody struct {
	AccountNumber string `json:"account_number"`
	Nickname      string `json:"nickname"`
	Password      string `json:"password"`
	SiteID        string `json:"site_id"`
}
