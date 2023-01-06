package operations

import (
	"openapi/pkg/models/shared"
)

type GetActivityPathParams struct {
	ActivityID int64 `pathParam:"style=simple,explode=false,name=activityId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetActivityRequest struct {
	PathParams GetActivityPathParams
}

type GetActivityResponse struct {
	Activity    *shared.Activity
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
