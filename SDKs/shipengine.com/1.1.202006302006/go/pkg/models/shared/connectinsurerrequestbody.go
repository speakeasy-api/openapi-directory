package shared

// ConnectInsurerRequestBody
// A create shipsurance connection request body
type ConnectInsurerRequestBody struct {
	Email    string `json:"email"`
	PolicyID string `json:"policy_id"`
}
