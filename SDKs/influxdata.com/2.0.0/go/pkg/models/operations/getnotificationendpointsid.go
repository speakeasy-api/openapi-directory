package operations

type GetNotificationEndpointsIDPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
}

type GetNotificationEndpointsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationEndpointsIDRequest struct {
	PathParams GetNotificationEndpointsIDPathParams
	Headers    GetNotificationEndpointsIDHeaders
}

type GetNotificationEndpointsIDResponse struct {
	ContentType                       string
	Error                             *interface{}
	NotificationEndpointDiscriminator *interface{}
	StatusCode                        int64
}
