// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ActionsDeleteSelfHostedRunnerGroupFromOrgRequest struct {
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// Unique identifier of the self-hosted runner group.
	RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsDeleteSelfHostedRunnerGroupFromOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
