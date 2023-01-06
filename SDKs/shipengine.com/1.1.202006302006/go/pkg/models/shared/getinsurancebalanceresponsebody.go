package shared

// GetInsuranceBalanceResponseBody
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type GetInsuranceBalanceResponseBody struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}
