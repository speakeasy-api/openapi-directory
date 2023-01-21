package operations

type PutNotificationEndpointsIDPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
}

type PutNotificationEndpointsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutNotificationEndpointsIDRequest struct {
	PathParams PutNotificationEndpointsIDPathParams
	Headers    PutNotificationEndpointsIDHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PutNotificationEndpointsIDResponse struct {
	ContentType                       string
	Error                             *interface{}
	NotificationEndpointDiscriminator *interface{}
	StatusCode                        int64
}
