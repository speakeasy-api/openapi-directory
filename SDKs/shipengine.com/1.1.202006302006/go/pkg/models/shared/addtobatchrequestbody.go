package shared

// AddToBatchRequestBody
// A modify batch object
type AddToBatchRequestBody struct {
	RateIds     []string `json:"rate_ids,omitempty"`
	ShipmentIds []string `json:"shipment_ids,omitempty"`
}
