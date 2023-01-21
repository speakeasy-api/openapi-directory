package shared

// GetBankAccountByV1IDResponse
// Response object returned by GetBankAccountByV1Id.
type GetBankAccountByV1IDResponse struct {
	BankAccount *BankAccount `json:"bank_account,omitempty"`
	Errors      []Error      `json:"errors,omitempty"`
}
