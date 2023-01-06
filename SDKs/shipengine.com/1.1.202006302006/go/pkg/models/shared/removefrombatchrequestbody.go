package shared

// RemoveFromBatchRequestBody
// A modify batch object
type RemoveFromBatchRequestBody struct {
	RateIds     []string `json:"rate_ids,omitempty"`
	ShipmentIds []string `json:"shipment_ids,omitempty"`
}
