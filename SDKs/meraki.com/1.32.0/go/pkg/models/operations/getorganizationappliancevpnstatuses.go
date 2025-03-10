// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetOrganizationApplianceVpnStatusesRequest struct {
	// A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
	EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
	// A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456
	NetworkIds     []string `queryParam:"style=form,explode=false,name=networkIds"`
	OrganizationID string   `pathParam:"style=simple,explode=false,name=organizationId"`
	// The number of entries per page returned. Acceptable range is 3 - 300. Default is 300.
	PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
	// A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
	StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetOrganizationApplianceVpnStatusesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetOrganizationApplianceVpnStatuses200ApplicationJSONObjects []map[string]interface{}
}
