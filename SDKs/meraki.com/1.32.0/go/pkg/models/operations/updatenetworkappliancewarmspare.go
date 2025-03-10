// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type UpdateNetworkApplianceWarmSpareRequestBody struct {
	// Enable warm spare
	Enabled bool `json:"enabled"`
	// Serial number of the warm spare appliance
	SpareSerial *string `json:"spareSerial,omitempty"`
	// Uplink mode, either virtual or public
	UplinkMode *string `json:"uplinkMode,omitempty"`
	// The WAN 1 shared IP
	VirtualIp1 *string `json:"virtualIp1,omitempty"`
	// The WAN 2 shared IP
	VirtualIp2 *string `json:"virtualIp2,omitempty"`
}

type UpdateNetworkApplianceWarmSpareRequest struct {
	RequestBody UpdateNetworkApplianceWarmSpareRequestBody `request:"mediaType=application/json"`
	NetworkID   string                                     `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceWarmSpareResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	UpdateNetworkApplianceWarmSpare200ApplicationJSONObject map[string]interface{}
}
