package shared

// ChargeRequestAdditionalRecipient
// Represents an additional recipient (other than the merchant) entitled to a portion of the tender.
// Support is currently limited to USD, CAD and GBP currencies
type ChargeRequestAdditionalRecipient struct {
	AmountMoney Money  `json:"amount_money"`
	Description string `json:"description"`
	LocationID  string `json:"location_id"`
}
