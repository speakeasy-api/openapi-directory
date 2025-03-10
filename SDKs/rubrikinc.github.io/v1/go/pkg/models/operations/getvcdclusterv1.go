// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetVcdClusterV1Request struct {
	// ID assigned to a vCD Cluster object.
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVcdClusterV1Response struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Details for a vCD Cluster object.
	VcdClusterSummary *shared.VcdClusterSummary
}
