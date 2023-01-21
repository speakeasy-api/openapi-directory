package shared

// GetBankAccountResponse
// Response object returned by `GetBankAccount`.
type GetBankAccountResponse struct {
	BankAccount *BankAccount `json:"bank_account,omitempty"`
	Errors      []Error      `json:"errors,omitempty"`
}
