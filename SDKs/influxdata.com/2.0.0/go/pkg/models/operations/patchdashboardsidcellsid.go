package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDashboardsIDCellsIDPathParams struct {
	CellID      string `pathParam:"style=simple,explode=false,name=cellID"`
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PatchDashboardsIDCellsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchDashboardsIDCellsIDRequest struct {
	PathParams PatchDashboardsIDCellsIDPathParams
	Headers    PatchDashboardsIDCellsIDHeaders
	Request    shared.CellUpdate `request:"mediaType=application/json"`
}

type PatchDashboardsIDCellsIDResponse struct {
	Cell        *shared.Cell
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
