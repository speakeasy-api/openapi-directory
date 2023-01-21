package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardsIDCellsPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PostDashboardsIDCellsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDashboardsIDCellsRequest struct {
	PathParams PostDashboardsIDCellsPathParams
	Headers    PostDashboardsIDCellsHeaders
	Request    shared.CreateCell `request:"mediaType=application/json"`
}

type PostDashboardsIDCellsResponse struct {
	Cell        *shared.Cell
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
