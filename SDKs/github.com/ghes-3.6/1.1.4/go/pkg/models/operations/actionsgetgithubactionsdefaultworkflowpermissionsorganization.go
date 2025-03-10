// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest struct {
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	ActionsGetDefaultWorkflowPermissions *shared.ActionsGetDefaultWorkflowPermissions
}
