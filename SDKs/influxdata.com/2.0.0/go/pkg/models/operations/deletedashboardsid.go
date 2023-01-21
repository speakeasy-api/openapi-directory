package operations

type DeleteDashboardsIDPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type DeleteDashboardsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDashboardsIDRequest struct {
	PathParams DeleteDashboardsIDPathParams
	Headers    DeleteDashboardsIDHeaders
}

type DeleteDashboardsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
