package operations

type GetDashboardsIDCellsIDViewPathParams struct {
	CellID      string `pathParam:"style=simple,explode=false,name=cellID"`
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type GetDashboardsIDCellsIDViewHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDashboardsIDCellsIDViewRequest struct {
	PathParams GetDashboardsIDCellsIDViewPathParams
	Headers    GetDashboardsIDCellsIDViewHeaders
}

type GetDashboardsIDCellsIDViewResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	View        *interface{}
}
