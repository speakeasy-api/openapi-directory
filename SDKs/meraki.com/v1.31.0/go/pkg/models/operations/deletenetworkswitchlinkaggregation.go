// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeleteNetworkSwitchLinkAggregationRequest struct {
	LinkAggregationID string `pathParam:"style=simple,explode=false,name=linkAggregationId"`
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
}

type DeleteNetworkSwitchLinkAggregationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
