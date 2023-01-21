package shared

// CashPaymentDetails
// Stores details about a cash payment. Contains only non-confidential information. For more information, see
// [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
type CashPaymentDetails struct {
	BuyerSuppliedMoney Money  `json:"buyer_supplied_money"`
	ChangeBackMoney    *Money `json:"change_back_money,omitempty"`
}
