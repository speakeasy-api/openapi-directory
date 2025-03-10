// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetNetworkCameraQualityRetentionProfilesRequest struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkCameraQualityRetentionProfilesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects []map[string]interface{}
}
