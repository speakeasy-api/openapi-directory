package shared

import (
	"time"
)

// ListManifestsResponseBodyPaginationLink
// Helpful links to other pages of results
type ListManifestsResponseBodyPaginationLink struct {
	First Link         `json:"first"`
	Last  Link         `json:"last"`
	Next  OptionalLink `json:"next"`
	Prev  OptionalLink `json:"prev"`
}

// ListManifestsResponseBodyManifestManifestDownload
// Object containing the href link to download the manifest file
type ListManifestsResponseBodyManifestManifestDownload struct {
	Href *string `json:"href,omitempty"`
}

// ListManifestsResponseBodyManifest
// Used for combining packages into one scannable form that a carrier can use when picking up a large
// number of shipments
type ListManifestsResponseBodyManifest struct {
	CarrierID        map[string]interface{}                             `json:"carrier_id,omitempty"`
	CreatedAt        *time.Time                                         `json:"created_at,omitempty"`
	FormID           map[string]interface{}                             `json:"form_id,omitempty"`
	ManifestDownload *ListManifestsResponseBodyManifestManifestDownload `json:"manifest_download,omitempty"`
	ManifestID       map[string]interface{}                             `json:"manifest_id,omitempty"`
	ShipDate         *time.Time                                         `json:"ship_date,omitempty"`
	Shipments        *int32                                             `json:"shipments,omitempty"`
	SubmissionID     *string                                            `json:"submission_id,omitempty"`
	WarehouseID      map[string]interface{}                             `json:"warehouse_id,omitempty"`
}

// ListManifestsResponseBody
// A list manifests response body
type ListManifestsResponseBody struct {
	Links     ListManifestsResponseBodyPaginationLink `json:"links"`
	Manifests []ListManifestsResponseBodyManifest     `json:"manifests"`
	Page      int32                                   `json:"page"`
	Pages     int32                                   `json:"pages"`
	Total     int64                                   `json:"total"`
}
