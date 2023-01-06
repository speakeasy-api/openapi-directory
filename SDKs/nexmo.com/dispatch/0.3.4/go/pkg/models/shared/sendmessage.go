package shared

// SendMessage
// Send Message
type SendMessage struct {
	From    FromProperty    `json:"from"`
	Message MessageProperty `json:"message"`
	To      ToProperty      `json:"to"`
}
