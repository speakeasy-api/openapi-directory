package operations

type DeleteDashboardsIDCellsIDPathParams struct {
	CellID      string `pathParam:"style=simple,explode=false,name=cellID"`
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type DeleteDashboardsIDCellsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDashboardsIDCellsIDRequest struct {
	PathParams DeleteDashboardsIDCellsIDPathParams
	Headers    DeleteDashboardsIDCellsIDHeaders
}

type DeleteDashboardsIDCellsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
