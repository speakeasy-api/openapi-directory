package shared

// WebsocketCallResponseCreateReport
// WebSocket Call
type WebsocketCallResponseCreateReport struct {
	Product *ProductWebsocketEnum `json:"product,omitempty"`
	Status  *string               `json:"status,omitempty"`
}
