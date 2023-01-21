package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardsIDLabelsPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PostDashboardsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDashboardsIDLabelsRequest struct {
	PathParams PostDashboardsIDLabelsPathParams
	Headers    PostDashboardsIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostDashboardsIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
