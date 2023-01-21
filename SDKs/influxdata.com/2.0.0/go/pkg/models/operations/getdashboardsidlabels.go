package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardsIDLabelsPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type GetDashboardsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDashboardsIDLabelsRequest struct {
	PathParams GetDashboardsIDLabelsPathParams
	Headers    GetDashboardsIDLabelsHeaders
}

type GetDashboardsIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
