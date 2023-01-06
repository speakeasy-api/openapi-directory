package shared

type Message struct {
	AccountRef       *string `json:"account-ref,omitempty"`
	ClientRef        *string `json:"client-ref,omitempty"`
	MessageID        *string `json:"message-id,omitempty"`
	MessagePrice     *string `json:"message-price,omitempty"`
	Network          *string `json:"network,omitempty"`
	RemainingBalance *string `json:"remaining-balance,omitempty"`
	Status           *string `json:"status,omitempty"`
	To               *string `json:"to,omitempty"`
}
