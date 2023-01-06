package shared

// ConnectSekoRequestBody
// A SEKO account information request body
type ConnectSekoRequestBody struct {
	AccessKey string `json:"access_key"`
	Nickname  string `json:"nickname"`
}
