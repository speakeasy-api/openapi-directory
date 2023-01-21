package operations

type DeleteNotificationRulesIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type DeleteNotificationRulesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteNotificationRulesIDRequest struct {
	PathParams DeleteNotificationRulesIDPathParams
	Headers    DeleteNotificationRulesIDHeaders
}

type DeleteNotificationRulesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
