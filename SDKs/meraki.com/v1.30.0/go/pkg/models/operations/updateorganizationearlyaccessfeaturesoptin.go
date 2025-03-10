// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type UpdateOrganizationEarlyAccessFeaturesOptInPathParams struct {
	OptInID        string `pathParam:"style=simple,explode=false,name=optInId"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationEarlyAccessFeaturesOptInRequestBody struct {
	// A list of network IDs to apply the opt-in to
	LimitScopeToNetworks []string `json:"limitScopeToNetworks,omitempty"`
}

type UpdateOrganizationEarlyAccessFeaturesOptInRequest struct {
	PathParams UpdateOrganizationEarlyAccessFeaturesOptInPathParams
	Request    *UpdateOrganizationEarlyAccessFeaturesOptInRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationEarlyAccessFeaturesOptInResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	UpdateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject map[string]interface{}
}
