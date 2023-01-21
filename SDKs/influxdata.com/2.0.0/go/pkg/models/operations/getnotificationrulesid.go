package operations

type GetNotificationRulesIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type GetNotificationRulesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationRulesIDRequest struct {
	PathParams GetNotificationRulesIDPathParams
	Headers    GetNotificationRulesIDHeaders
}

type GetNotificationRulesIDResponse struct {
	ContentType                   string
	Error                         *interface{}
	NotificationRuleDiscriminator *interface{}
	StatusCode                    int64
}
