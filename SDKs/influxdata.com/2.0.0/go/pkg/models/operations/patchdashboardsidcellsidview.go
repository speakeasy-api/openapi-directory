package operations

type PatchDashboardsIDCellsIDViewPathParams struct {
	CellID      string `pathParam:"style=simple,explode=false,name=cellID"`
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PatchDashboardsIDCellsIDViewHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchDashboardsIDCellsIDViewRequest struct {
	PathParams PatchDashboardsIDCellsIDViewPathParams
	Headers    PatchDashboardsIDCellsIDViewHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PatchDashboardsIDCellsIDViewResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	View        *interface{}
}
