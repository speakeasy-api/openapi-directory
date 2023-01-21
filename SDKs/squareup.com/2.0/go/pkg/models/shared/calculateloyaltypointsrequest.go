package shared

// CalculateLoyaltyPointsRequest
// A request to calculate the points that a buyer can earn from
// a specified purchase.
type CalculateLoyaltyPointsRequest struct {
	OrderID                *string `json:"order_id,omitempty"`
	TransactionAmountMoney *Money  `json:"transaction_amount_money,omitempty"`
}
