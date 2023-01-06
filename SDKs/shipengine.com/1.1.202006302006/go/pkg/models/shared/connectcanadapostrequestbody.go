package shared

// ConnectCanadaPostRequestBody
// A Canada Post account information request body
type ConnectCanadaPostRequestBody struct {
	AccountNumber string `json:"account_number"`
	APIKey        string `json:"api_key"`
	APISecret     string `json:"api_secret"`
	ContractID    string `json:"contract_id"`
	Nickname      string `json:"nickname"`
}
