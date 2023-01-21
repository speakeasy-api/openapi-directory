package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardsIDOwnersPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type GetDashboardsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDashboardsIDOwnersRequest struct {
	PathParams GetDashboardsIDOwnersPathParams
	Headers    GetDashboardsIDOwnersHeaders
}

type GetDashboardsIDOwnersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceOwners *shared.ResourceOwners
	StatusCode     int64
}
