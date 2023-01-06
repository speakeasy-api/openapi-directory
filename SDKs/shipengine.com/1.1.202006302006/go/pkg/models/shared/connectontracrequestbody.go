package shared

// ConnectOntracRequestBody
// An Ontrac account information request body
type ConnectOntracRequestBody struct {
	AccountNumber string `json:"account_number"`
	Nickname      string `json:"nickname"`
	Password      string `json:"password"`
}
