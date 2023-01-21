package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardsIDMembersPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PostDashboardsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDashboardsIDMembersRequest struct {
	PathParams PostDashboardsIDMembersPathParams
	Headers    PostDashboardsIDMembersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostDashboardsIDMembersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceMember *shared.ResourceMember
	StatusCode     int64
}
