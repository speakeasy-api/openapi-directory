// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateClusterRequest struct {
	// Array that contains the changed information for the Rubrik cluster object.
	ClusterUpdate shared.ClusterUpdate `request:"mediaType=application/json"`
	// ID of a Rubrik cluster object, or use *me* for the Rubrik cluster that is hosting the current API session.
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateClusterResponse struct {
	// Updated information for a specified Rubrik cluster.
	ClusterInfo *shared.ClusterInfo
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
