package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardsIDPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type GetDashboardsIDQueryParams struct {
	Include *shared.TraceSpanEnum `queryParam:"style=form,explode=true,name=include"`
}

type GetDashboardsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDashboardsIDRequest struct {
	PathParams  GetDashboardsIDPathParams
	QueryParams GetDashboardsIDQueryParams
	Headers     GetDashboardsIDHeaders
}

type GetDashboardsIDResponse struct {
	ContentType                            string
	Error                                  *interface{}
	GetDashboardsID200ApplicationJSONOneOf *interface{}
	StatusCode                             int64
}
