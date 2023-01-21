package operations

type DeleteNotificationEndpointsIDPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
}

type DeleteNotificationEndpointsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteNotificationEndpointsIDRequest struct {
	PathParams DeleteNotificationEndpointsIDPathParams
	Headers    DeleteNotificationEndpointsIDHeaders
}

type DeleteNotificationEndpointsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
