package shared

import (
	"time"
)

// GetTrackingLogResponseBody
// A tracking information resource
type GetTrackingLogResponseBody struct {
	ActualDeliveryDate       *time.Time   `json:"actual_delivery_date,omitempty"`
	CarrierStatusCode        string       `json:"carrier_status_code"`
	CarrierStatusDescription *string      `json:"carrier_status_description,omitempty"`
	EstimatedDeliveryDate    time.Time    `json:"estimated_delivery_date"`
	Events                   []TrackEvent `json:"events"`
	ExceptionDescription     *string      `json:"exception_description,omitempty"`
	ShipDate                 *time.Time   `json:"ship_date,omitempty"`
	StatusCode               string       `json:"status_code"`
	StatusDescription        *string      `json:"status_description,omitempty"`
	TrackingNumber           string       `json:"tracking_number"`
}
