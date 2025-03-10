// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TeamsGetMembershipForUserLegacyRequest struct {
	// The unique identifier of the team.
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
	// The handle for the GitHub user account.
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsGetMembershipForUserLegacyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Response
	TeamMembership *shared.TeamMembership
}
