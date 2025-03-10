// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type SearchTeamMembersSecurity struct {
	Oauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type SearchTeamMembersResponse struct {
	ContentType string
	// Success
	SearchTeamMembersResponse *shared.SearchTeamMembersResponse
	StatusCode                int
	RawResponse               *http.Response
}
