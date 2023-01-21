package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationEndpointsIDLabelsPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
}

type GetNotificationEndpointsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationEndpointsIDLabelsRequest struct {
	PathParams GetNotificationEndpointsIDLabelsPathParams
	Headers    GetNotificationEndpointsIDLabelsHeaders
}

type GetNotificationEndpointsIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
