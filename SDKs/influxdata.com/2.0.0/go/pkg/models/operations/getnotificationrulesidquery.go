package operations

type GetNotificationRulesIDQueryPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type GetNotificationRulesIDQueryHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationRulesIDQueryRequest struct {
	PathParams GetNotificationRulesIDQueryPathParams
	Headers    GetNotificationRulesIDQueryHeaders
}

type GetNotificationRulesIDQueryResponse struct {
	ContentType  string
	Error        *interface{}
	FluxResponse *interface{}
	StatusCode   int64
}
