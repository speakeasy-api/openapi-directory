package operations

type GetNotificationEndpointsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
	OrgID  string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetNotificationEndpointsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationEndpointsRequest struct {
	QueryParams GetNotificationEndpointsQueryParams
	Headers     GetNotificationEndpointsHeaders
}

type GetNotificationEndpointsResponse struct {
	ContentType           string
	Error                 *interface{}
	NotificationEndpoints *interface{}
	StatusCode            int64
}
