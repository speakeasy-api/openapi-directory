package shared

// InvoiceAcceptedPaymentMethods
// The payment methods that customers can use to pay an invoice on the Square-hosted invoice page.
type InvoiceAcceptedPaymentMethods struct {
	BankAccount    *bool `json:"bank_account,omitempty"`
	Card           *bool `json:"card,omitempty"`
	SquareGiftCard *bool `json:"square_gift_card,omitempty"`
}
