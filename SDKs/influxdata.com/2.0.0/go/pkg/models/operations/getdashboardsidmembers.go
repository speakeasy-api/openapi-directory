package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardsIDMembersPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type GetDashboardsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDashboardsIDMembersRequest struct {
	PathParams GetDashboardsIDMembersPathParams
	Headers    GetDashboardsIDMembersHeaders
}

type GetDashboardsIDMembersResponse struct {
	ContentType     string
	Error           *interface{}
	ResourceMembers *shared.ResourceMembers
	StatusCode      int64
}
