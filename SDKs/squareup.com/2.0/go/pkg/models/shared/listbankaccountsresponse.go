package shared

// ListBankAccountsResponse
// Response object returned by ListBankAccounts.
type ListBankAccountsResponse struct {
	BankAccounts []BankAccount `json:"bank_accounts,omitempty"`
	Cursor       *string       `json:"cursor,omitempty"`
	Errors       []Error       `json:"errors,omitempty"`
}
