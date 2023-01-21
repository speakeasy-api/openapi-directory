package shared

// TenderCardDetails
// Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
type TenderCardDetails struct {
	Card        *Card   `json:"card,omitempty"`
	EntryMethod *string `json:"entry_method,omitempty"`
	Status      *string `json:"status,omitempty"`
}
