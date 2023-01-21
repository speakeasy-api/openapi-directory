package shared

// TenderCashDetails
// Represents the details of a tender with `type` `CASH`.
type TenderCashDetails struct {
	BuyerTenderedMoney *Money `json:"buyer_tendered_money,omitempty"`
	ChangeBackMoney    *Money `json:"change_back_money,omitempty"`
}
