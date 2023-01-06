package shared

// ConnectEndiciaRequestBody
// An Endicia account information request body
type ConnectEndiciaRequestBody struct {
	Account    string `json:"account"`
	Nickname   string `json:"nickname"`
	Passphrase string `json:"passphrase"`
}
