// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetActivitiesRequest struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// Project ID
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetActivitiesResponse struct {
	// A list of activity models
	ActivityList *shared.ActivityList
	ContentType  string
	// ProjectNotFound
	Error       *shared.Error
	StatusCode  int
	RawResponse *http.Response
}
