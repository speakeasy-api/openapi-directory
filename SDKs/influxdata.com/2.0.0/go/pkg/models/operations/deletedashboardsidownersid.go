package operations

type DeleteDashboardsIDOwnersIDPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
	UserID      string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteDashboardsIDOwnersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDashboardsIDOwnersIDRequest struct {
	PathParams DeleteDashboardsIDOwnersIDPathParams
	Headers    DeleteDashboardsIDOwnersIDHeaders
}

type DeleteDashboardsIDOwnersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
