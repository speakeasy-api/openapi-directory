package shared

// ConnectDpdRequestBody
// A DPD account information request body
type ConnectDpdRequestBody struct {
	AccountNumber string `json:"account_number"`
	Nickname      string `json:"nickname"`
	Password      string `json:"password"`
}
