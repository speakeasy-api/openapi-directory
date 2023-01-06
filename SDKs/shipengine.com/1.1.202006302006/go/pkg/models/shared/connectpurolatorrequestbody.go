package shared

// ConnectPurolatorRequestBody
// A Purolator account information request body
type ConnectPurolatorRequestBody struct {
	AccountNumber string `json:"account_number"`
	ActivationKey string `json:"activation_key"`
	Nickname      string `json:"nickname"`
}
