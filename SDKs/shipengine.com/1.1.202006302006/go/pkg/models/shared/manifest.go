package shared

import (
	"time"
)

// ManifestManifestDownload
// Object containing the href link to download the manifest file
type ManifestManifestDownload struct {
	Href *string `json:"href,omitempty"`
}

// Manifest
// Used for combining packages into one scannable form that a carrier can use when picking up a large
// number of shipments
type Manifest struct {
	CarrierID        map[string]interface{}    `json:"carrier_id,omitempty"`
	CreatedAt        *time.Time                `json:"created_at,omitempty"`
	FormID           map[string]interface{}    `json:"form_id,omitempty"`
	ManifestDownload *ManifestManifestDownload `json:"manifest_download,omitempty"`
	ManifestID       map[string]interface{}    `json:"manifest_id,omitempty"`
	ShipDate         *time.Time                `json:"ship_date,omitempty"`
	Shipments        *int32                    `json:"shipments,omitempty"`
	SubmissionID     *string                   `json:"submission_id,omitempty"`
	WarehouseID      map[string]interface{}    `json:"warehouse_id,omitempty"`
}
