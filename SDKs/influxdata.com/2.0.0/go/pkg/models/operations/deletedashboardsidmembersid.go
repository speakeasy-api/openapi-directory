package operations

type DeleteDashboardsIDMembersIDPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
	UserID      string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteDashboardsIDMembersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDashboardsIDMembersIDRequest struct {
	PathParams DeleteDashboardsIDMembersIDPathParams
	Headers    DeleteDashboardsIDMembersIDHeaders
}

type DeleteDashboardsIDMembersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
