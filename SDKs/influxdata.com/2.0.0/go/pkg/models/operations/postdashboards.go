package operations

type PostDashboardsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDashboardsRequest struct {
	Headers PostDashboardsHeaders
	Request interface{} `request:"mediaType=application/json"`
}

type PostDashboardsResponse struct {
	ContentType                           string
	Error                                 *interface{}
	PostDashboards201ApplicationJSONOneOf *interface{}
	StatusCode                            int64
}
