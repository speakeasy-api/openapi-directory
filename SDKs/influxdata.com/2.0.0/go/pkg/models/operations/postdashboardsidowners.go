package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardsIDOwnersPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PostDashboardsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDashboardsIDOwnersRequest struct {
	PathParams PostDashboardsIDOwnersPathParams
	Headers    PostDashboardsIDOwnersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostDashboardsIDOwnersResponse struct {
	ContentType   string
	Error         *interface{}
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
