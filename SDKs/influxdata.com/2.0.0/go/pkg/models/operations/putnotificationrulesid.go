package operations

type PutNotificationRulesIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type PutNotificationRulesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutNotificationRulesIDRequest struct {
	PathParams PutNotificationRulesIDPathParams
	Headers    PutNotificationRulesIDHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PutNotificationRulesIDResponse struct {
	ContentType                   string
	Error                         *interface{}
	NotificationRuleDiscriminator *interface{}
	StatusCode                    int64
}
