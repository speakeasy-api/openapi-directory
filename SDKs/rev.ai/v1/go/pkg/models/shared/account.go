package shared

// Account
// Rev.ai Account Model
type Account struct {
	BalanceSeconds *int64  `json:"balance_seconds,omitempty"`
	Email          *string `json:"email,omitempty"`
}
