package shared

// ShipmentResponseError
// A shipment response error.
type ShipmentResponseError struct {
	Error              string                 `json:"error"`
	ExternalShipmentID map[string]interface{} `json:"external_shipment_id,omitempty"`
	ShipmentID         map[string]interface{} `json:"shipment_id"`
}
