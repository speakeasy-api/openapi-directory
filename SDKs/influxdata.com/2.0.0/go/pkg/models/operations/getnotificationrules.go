package operations

type GetNotificationRulesQueryParams struct {
	CheckID *string `queryParam:"style=form,explode=true,name=checkID"`
	Limit   *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int64  `queryParam:"style=form,explode=true,name=offset"`
	OrgID   string  `queryParam:"style=form,explode=true,name=orgID"`
	Tag     *string `queryParam:"style=form,explode=true,name=tag"`
}

type GetNotificationRulesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationRulesRequest struct {
	QueryParams GetNotificationRulesQueryParams
	Headers     GetNotificationRulesHeaders
}

type GetNotificationRulesResponse struct {
	ContentType       string
	Error             *interface{}
	NotificationRules *interface{}
	StatusCode        int64
}
