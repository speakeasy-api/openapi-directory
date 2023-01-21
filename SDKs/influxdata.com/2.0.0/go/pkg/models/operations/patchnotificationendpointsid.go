package operations

import (
	"openapi/pkg/models/shared"
)

type PatchNotificationEndpointsIDPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
}

type PatchNotificationEndpointsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchNotificationEndpointsIDRequest struct {
	PathParams PatchNotificationEndpointsIDPathParams
	Headers    PatchNotificationEndpointsIDHeaders
	Request    shared.NotificationEndpointUpdate `request:"mediaType=application/json"`
}

type PatchNotificationEndpointsIDResponse struct {
	ContentType                       string
	Error                             *interface{}
	NotificationEndpointDiscriminator *interface{}
	StatusCode                        int64
}
