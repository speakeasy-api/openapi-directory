package shared

// ConnectDhlExpressCaRequestBody
// A DHL Express CA account information request body
type ConnectDhlExpressCaRequestBody struct {
	AccountNumber string `json:"account_number"`
	Nickname      string `json:"nickname"`
}
