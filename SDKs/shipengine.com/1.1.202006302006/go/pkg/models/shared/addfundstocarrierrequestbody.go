package shared

// AddFundsToCarrierRequestBody
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type AddFundsToCarrierRequestBody struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}
