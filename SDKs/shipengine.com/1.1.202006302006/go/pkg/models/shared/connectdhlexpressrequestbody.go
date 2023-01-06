package shared

// ConnectDhlExpressRequestBody
// A DHL express account information request body
type ConnectDhlExpressRequestBody struct {
	AccountNumber string `json:"account_number"`
	Nickname      string `json:"nickname"`
}
