package shared

// ConnectDhlExpressAuRequestBody
// A DHL Express AU account information request body
type ConnectDhlExpressAuRequestBody struct {
	AccountNumber string `json:"account_number"`
	Nickname      string `json:"nickname"`
}
