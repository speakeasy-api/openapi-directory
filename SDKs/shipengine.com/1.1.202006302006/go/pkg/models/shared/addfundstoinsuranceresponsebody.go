package shared

// AddFundsToInsuranceResponseBody
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type AddFundsToInsuranceResponseBody struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}
