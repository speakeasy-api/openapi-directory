// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetNetworkWirelessClientLatencyHistoryPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessClientLatencyHistoryQueryParams struct {
	// The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.
	Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
	// The beginning of the timespan for the data. The maximum lookback period is 791 days from today.
	T0 *string `queryParam:"style=form,explode=true,name=t0"`
	// The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
	T1 *string `queryParam:"style=form,explode=true,name=t1"`
	// The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.
	Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkWirelessClientLatencyHistoryRequest struct {
	PathParams  GetNetworkWirelessClientLatencyHistoryPathParams
	QueryParams GetNetworkWirelessClientLatencyHistoryQueryParams
}

type GetNetworkWirelessClientLatencyHistoryResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetNetworkWirelessClientLatencyHistory200ApplicationJSONObjects []map[string]interface{}
}
