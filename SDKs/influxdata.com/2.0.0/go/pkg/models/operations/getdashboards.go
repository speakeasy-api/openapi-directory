package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardsQueryParams struct {
	Descending *bool                  `queryParam:"style=form,explode=true,name=descending"`
	ID         []string               `queryParam:"style=form,explode=true,name=id"`
	Limit      *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int64                 `queryParam:"style=form,explode=true,name=offset"`
	Org        *string                `queryParam:"style=form,explode=true,name=org"`
	OrgID      *string                `queryParam:"style=form,explode=true,name=orgID"`
	Owner      *string                `queryParam:"style=form,explode=true,name=owner"`
	SortBy     *shared.DescendingEnum `queryParam:"style=form,explode=true,name=sortBy"`
}

type GetDashboardsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDashboardsRequest struct {
	QueryParams GetDashboardsQueryParams
	Headers     GetDashboardsHeaders
}

type GetDashboardsResponse struct {
	ContentType string
	Dashboards  *shared.Dashboards
	Error       *interface{}
	StatusCode  int64
}
