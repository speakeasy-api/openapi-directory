// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest struct {
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// The unique identifier of the repository.
	RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
	// Unique identifier of the self-hosted runner group.
	RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
