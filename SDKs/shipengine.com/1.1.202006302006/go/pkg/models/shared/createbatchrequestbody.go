package shared

// CreateBatchRequestBody
// A create batch request body
type CreateBatchRequestBody struct {
	BatchNotes      *string                  `json:"batch_notes,omitempty"`
	ExternalBatchID *string                  `json:"external_batch_id,omitempty"`
	RateIds         []map[string]interface{} `json:"rate_ids,omitempty"`
	ShipmentIds     []string                 `json:"shipment_ids,omitempty"`
}
