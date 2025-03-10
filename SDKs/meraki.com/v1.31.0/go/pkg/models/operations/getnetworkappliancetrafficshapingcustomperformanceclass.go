// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest struct {
	CustomPerformanceClassID string `pathParam:"style=simple,explode=false,name=customPerformanceClassId"`
	NetworkID                string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject map[string]interface{}
}
