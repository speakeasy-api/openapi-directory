// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetNetworkApplianceFirewallOneToOneNatRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceFirewallOneToOneNatRulesRequest struct {
	PathParams GetNetworkApplianceFirewallOneToOneNatRulesPathParams
}

type GetNetworkApplianceFirewallOneToOneNatRulesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject map[string]interface{}
}
