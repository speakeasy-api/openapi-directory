package shared

// SendWithFailoverMessage
// Send With Failover Message
type SendWithFailoverMessage struct {
	Failover *FailoverProperty `json:"failover,omitempty"`
	From     FromProperty      `json:"from"`
	Message  MessageProperty   `json:"message"`
	To       ToProperty        `json:"to"`
}
