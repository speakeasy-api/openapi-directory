package operations

import (
	"openapi/pkg/models/shared"
)

type GetSalesActivitiesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetSalesActivitiesQueryParams struct {
	ExcludeOwner *string                       `queryParam:"style=form,explode=true,name=excludeOwner"`
	Type         *shared.SalesActivityTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetSalesActivitiesRequest struct {
	PathParams  GetSalesActivitiesPathParams
	QueryParams GetSalesActivitiesQueryParams
}

type GetSalesActivitiesResponse struct {
	ContentType     string
	Error           *shared.Error
	SalesActivities *shared.SalesActivities
	StatusCode      int64
}
