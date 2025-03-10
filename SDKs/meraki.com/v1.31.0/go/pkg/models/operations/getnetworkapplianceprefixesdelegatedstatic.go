// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"time"
)

type GetNetworkAppliancePrefixesDelegatedStaticRequest struct {
	NetworkID               string `pathParam:"style=simple,explode=false,name=networkId"`
	StaticDelegatedPrefixID string `pathParam:"style=simple,explode=false,name=staticDelegatedPrefixId"`
}

// GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin - WAN1/WAN2/Independent prefix.
type GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin struct {
	// Uplink provided or independent
	Interfaces []string `json:"interfaces,omitempty"`
	// Origin type
	Type *string `json:"type,omitempty"`
}

// GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON - Successful operation
type GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON struct {
	// Prefix creation time.
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	// Identifying description for the prefix.
	Description *string `json:"description,omitempty"`
	// WAN1/WAN2/Independent prefix.
	Origin *GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin `json:"origin,omitempty"`
	// IPv6 prefix/prefix length.
	Prefix *string `json:"prefix,omitempty"`
	// Static delegated prefix id.
	StaticDelegatedPrefixID *string `json:"staticDelegatedPrefixId,omitempty"`
	// Prefix Updated time.
	UpdatedAt *time.Time `json:"updatedAt,omitempty"`
}

type GetNetworkAppliancePrefixesDelegatedStaticResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject *GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON
}
