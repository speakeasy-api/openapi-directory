package shared

type CommissionStats struct {
	Balance    *Monetary `json:"balance,omitempty"`
	Paid       *Monetary `json:"paid,omitempty"`
	QuoteTotal *Monetary `json:"quote_total,omitempty"`
	Total      *Monetary `json:"total,omitempty"`
}
