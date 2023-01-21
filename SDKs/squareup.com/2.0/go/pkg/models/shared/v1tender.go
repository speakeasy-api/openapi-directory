package shared

// V1Tender
// A tender represents a discrete monetary exchange. Square represents this
// exchange as a money object with a specific currency and amount, where the
// amount is given in the smallest denomination of the given currency.
//
// Square POS can accept more than one form of tender for a single payment (such
// as by splitting a bill between a credit card and a gift card). The `tender`
// field of the Payment object lists all forms of tender used for the payment.
//
// Split tender payments behave slightly differently from single tender payments:
//
// The receipt_url for a split tender corresponds only to the first tender listed
// in the tender field. To get the receipt URLs for the remaining tenders, use
// the receipt_url fields of the corresponding Tender objects.
//
// *A note on gift cards**: when a customer purchases a Square gift card from a
// merchant, the merchant receives the full amount of the gift card in the
// associated payment.
//
// When that gift card is used as a tender, the balance of the gift card is
// reduced and the merchant receives no funds. A `Tender` object with a type of
// `SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the
// associated payment.
type V1Tender struct {
	CardBrand       *string  `json:"card_brand,omitempty"`
	ChangeBackMoney *V1Money `json:"change_back_money,omitempty"`
	EmployeeID      *string  `json:"employee_id,omitempty"`
	EntryMethod     *string  `json:"entry_method,omitempty"`
	ID              *string  `json:"id,omitempty"`
	IsExchange      *bool    `json:"is_exchange,omitempty"`
	Name            *string  `json:"name,omitempty"`
	PanSuffix       *string  `json:"pan_suffix,omitempty"`
	PaymentNote     *string  `json:"payment_note,omitempty"`
	ReceiptURL      *string  `json:"receipt_url,omitempty"`
	RefundedMoney   *V1Money `json:"refunded_money,omitempty"`
	SettledAt       *string  `json:"settled_at,omitempty"`
	TenderedAt      *string  `json:"tendered_at,omitempty"`
	TenderedMoney   *V1Money `json:"tendered_money,omitempty"`
	TotalMoney      *V1Money `json:"total_money,omitempty"`
	Type            *string  `json:"type,omitempty"`
}
