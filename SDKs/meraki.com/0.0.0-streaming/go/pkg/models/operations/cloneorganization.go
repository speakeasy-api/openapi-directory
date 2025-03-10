// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type CloneOrganizationRequestBody struct {
	// The name of the new organization
	Name string `json:"name"`
}

type CloneOrganizationRequest struct {
	RequestBody    CloneOrganizationRequestBody `request:"mediaType=application/json"`
	OrganizationID string                       `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CloneOrganizationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	CloneOrganization201ApplicationJSONObject map[string]interface{}
}
