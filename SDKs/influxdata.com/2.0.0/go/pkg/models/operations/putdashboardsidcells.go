package operations

import (
	"openapi/pkg/models/shared"
)

type PutDashboardsIDCellsPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PutDashboardsIDCellsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutDashboardsIDCellsRequest struct {
	PathParams PutDashboardsIDCellsPathParams
	Headers    PutDashboardsIDCellsHeaders
	Request    []shared.Cell `request:"mediaType=application/json"`
}

type PutDashboardsIDCellsResponse struct {
	ContentType string
	Dashboard   *shared.Dashboard
	Error       *interface{}
	StatusCode  int64
}
