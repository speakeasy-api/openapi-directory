// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type MissedSnapshotsRequest struct {
	// ID of a virtual machine.
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MissedSnapshotsResponse struct {
	ContentType string
	// Missed snapshot details for a virtual machine.
	MissedSnapshotListResponse *shared.MissedSnapshotListResponse
	StatusCode                 int
	RawResponse                *http.Response
}
