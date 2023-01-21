package shared

// AdditionalRecipient
// Represents an additional recipient (other than the merchant) receiving a portion of this tender.
type AdditionalRecipient struct {
	AmountMoney  Money   `json:"amount_money"`
	Description  *string `json:"description,omitempty"`
	LocationID   string  `json:"location_id"`
	ReceivableID *string `json:"receivable_id,omitempty"`
}
