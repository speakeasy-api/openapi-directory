package operations

import (
	"openapi/pkg/models/shared"
)

type GetActivitiesPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetActivitiesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetActivitiesRequest struct {
	PathParams  GetActivitiesPathParams
	QueryParams GetActivitiesQueryParams
}

type GetActivitiesResponse struct {
	ActivityList *shared.ActivityList
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
