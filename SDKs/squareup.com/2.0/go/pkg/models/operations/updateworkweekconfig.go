// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateWorkweekConfigSecurity struct {
	Oauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type UpdateWorkweekConfigRequest struct {
	// An object containing the fields to POST for the request.
	//
	// See the corresponding object definition for field details.
	UpdateWorkweekConfigRequest shared.UpdateWorkweekConfigRequest `request:"mediaType=application/json"`
	// The UUID for the `WorkweekConfig` object being updated.
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateWorkweekConfigResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Success
	UpdateWorkweekConfigResponse *shared.UpdateWorkweekConfigResponse
}
