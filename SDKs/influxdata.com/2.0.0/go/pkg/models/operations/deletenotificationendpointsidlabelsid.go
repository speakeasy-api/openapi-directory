package operations

type DeleteNotificationEndpointsIDLabelsIDPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
	LabelID    string `pathParam:"style=simple,explode=false,name=labelID"`
}

type DeleteNotificationEndpointsIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteNotificationEndpointsIDLabelsIDRequest struct {
	PathParams DeleteNotificationEndpointsIDLabelsIDPathParams
	Headers    DeleteNotificationEndpointsIDLabelsIDHeaders
}

type DeleteNotificationEndpointsIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
