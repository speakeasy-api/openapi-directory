package shared

import (
	"time"
)

// GetManifestByIDResponseBodyManifestDownload
// Object containing the href link to download the manifest file
type GetManifestByIDResponseBodyManifestDownload struct {
	Href *string `json:"href,omitempty"`
}

// GetManifestByIDResponseBody
// Used for combining packages into one scannable form that a carrier can use when picking up a large
// number of shipments
type GetManifestByIDResponseBody struct {
	CarrierID        map[string]interface{}                      `json:"carrier_id"`
	CreatedAt        time.Time                                   `json:"created_at"`
	FormID           map[string]interface{}                      `json:"form_id"`
	ManifestDownload GetManifestByIDResponseBodyManifestDownload `json:"manifest_download"`
	ManifestID       map[string]interface{}                      `json:"manifest_id"`
	ShipDate         time.Time                                   `json:"ship_date"`
	Shipments        int32                                       `json:"shipments"`
	SubmissionID     string                                      `json:"submission_id"`
	WarehouseID      map[string]interface{}                      `json:"warehouse_id"`
}
