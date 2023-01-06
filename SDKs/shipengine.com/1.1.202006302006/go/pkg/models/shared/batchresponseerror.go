package shared

// BatchResponseError
// A batch response error
type BatchResponseError struct {
	Error      *string                `json:"error,omitempty"`
	ShipmentID map[string]interface{} `json:"shipment_id,omitempty"`
}
