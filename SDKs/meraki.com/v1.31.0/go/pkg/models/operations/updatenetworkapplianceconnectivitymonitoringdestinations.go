// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations struct {
	// Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed
	Default *bool `json:"default,omitempty"`
	// Description of the testing destination. Optional, defaults to null
	Description *string `json:"description,omitempty"`
	// The IP address to test connectivity with
	IP string `json:"ip"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody struct {
	// The list of connectivity monitoring destinations
	Destinations []UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations `json:"destinations,omitempty"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest struct {
	RequestBody *UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody `request:"mediaType=application/json"`
	NetworkID   string                                                               `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	UpdateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject map[string]interface{}
}
