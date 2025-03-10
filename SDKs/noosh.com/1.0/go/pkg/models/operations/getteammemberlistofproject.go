// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetTeamMemberListOfProjectRequest struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTeamMemberListOfProjectResponse struct {
	Body        []byte
	ContentType string
	// There are not any result matching your search condition
	HTTPStatusVO *shared.HTTPStatusVO
	StatusCode   int
	RawResponse  *http.Response
	// Successful retrieval
	TeamMemberListVO *shared.TeamMemberListVO
}
