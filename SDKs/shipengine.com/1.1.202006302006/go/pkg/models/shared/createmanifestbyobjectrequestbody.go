package shared

import (
	"time"
)

// CreateManifestByObjectRequestBody
// A create manifest request body
type CreateManifestByObjectRequestBody struct {
	CarrierID        string    `json:"carrier_id"`
	ExcludedLabelIds []string  `json:"excluded_label_ids,omitempty"`
	LabelIds         []string  `json:"label_ids,omitempty"`
	ShipDate         time.Time `json:"ship_date"`
	WarehouseID      string    `json:"warehouse_id"`
}
