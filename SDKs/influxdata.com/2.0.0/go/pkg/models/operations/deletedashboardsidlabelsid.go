package operations

type DeleteDashboardsIDLabelsIDPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
	LabelID     string `pathParam:"style=simple,explode=false,name=labelID"`
}

type DeleteDashboardsIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDashboardsIDLabelsIDRequest struct {
	PathParams DeleteDashboardsIDLabelsIDPathParams
	Headers    DeleteDashboardsIDLabelsIDHeaders
}

type DeleteDashboardsIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
