package shared

type SubaccountCreateResponse struct {
	APIKey                   *string  `json:"api_key,omitempty"`
	Balance                  *float64 `json:"balance,omitempty"`
	CreatedAt                *string  `json:"created_at,omitempty"`
	CreditLimit              *float64 `json:"credit_limit,omitempty"`
	Name                     *string  `json:"name,omitempty"`
	PrimaryAccountAPIKey     *string  `json:"primary_account_api_key,omitempty"`
	Suspended                *bool    `json:"suspended,omitempty"`
	UsePrimaryAccountBalance *bool    `json:"use_primary_account_balance,omitempty"`
}
