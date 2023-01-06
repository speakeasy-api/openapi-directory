package shared

type Monetary struct {
	Amount   *float32 `json:"amount,omitempty"`
	Currency *string  `json:"currency,omitempty"`
}
