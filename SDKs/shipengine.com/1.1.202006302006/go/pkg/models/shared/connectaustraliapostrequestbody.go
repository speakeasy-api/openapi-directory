package shared

// ConnectAustraliaPostRequestBody
// An Australia Post account information request body
type ConnectAustraliaPostRequestBody struct {
	AccountNumber string `json:"account_number"`
	APIKey        string `json:"api_key"`
	APISecret     string `json:"api_secret"`
	Nickname      string `json:"nickname"`
}
