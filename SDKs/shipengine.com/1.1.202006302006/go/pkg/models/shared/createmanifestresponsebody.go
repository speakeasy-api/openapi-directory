package shared

import (
	"time"
)

// CreateManifestResponseBodyManifestDownload
// Object containing the href link to download the manifest file
type CreateManifestResponseBodyManifestDownload struct {
	Href *string `json:"href,omitempty"`
}

// CreateManifestResponseBody
// Deprecated manifest resource
type CreateManifestResponseBody struct {
	CarrierID        map[string]interface{}                     `json:"carrier_id"`
	CreatedAt        time.Time                                  `json:"created_at"`
	FormID           map[string]interface{}                     `json:"form_id"`
	ManifestDownload CreateManifestResponseBodyManifestDownload `json:"manifest_download"`
	ManifestID       map[string]interface{}                     `json:"manifest_id"`
	Manifests        []Manifest                                 `json:"manifests,omitempty"`
	ShipDate         time.Time                                  `json:"ship_date"`
	Shipments        int32                                      `json:"shipments"`
	SubmissionID     string                                     `json:"submission_id"`
	WarehouseID      map[string]interface{}                     `json:"warehouse_id"`
}
