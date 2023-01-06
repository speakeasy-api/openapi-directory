package shared

// WebsocketCall
// WebSocket Call
type WebsocketCall struct {
	Product ProductWebsocketEnum `json:"product"`
	Status  *string              `json:"status,omitempty"`
}
