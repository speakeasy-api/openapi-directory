package operations

import (
	"openapi/pkg/models/shared"
)

type CollectAnalyticsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CollectAnalyticsRequest struct {
	PathParams CollectAnalyticsPathParams
	Request    *shared.AnalyticsCollection `request:"mediaType=application/json"`
}

type CollectAnalyticsResponse struct {
	ContentType     string
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
