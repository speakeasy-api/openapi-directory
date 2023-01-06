package shared

// WebsocketCallResponseGetReport
// WebSocket Call
type WebsocketCallResponseGetReport struct {
	Product *ProductWebsocketEnum `json:"product,omitempty"`
	Status  *string               `json:"status,omitempty"`
}
