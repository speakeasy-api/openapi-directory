package operations

import (
	"openapi/pkg/models/shared"
)

type PatchNotificationRulesIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type PatchNotificationRulesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchNotificationRulesIDRequest struct {
	PathParams PatchNotificationRulesIDPathParams
	Headers    PatchNotificationRulesIDHeaders
	Request    shared.NotificationRuleUpdate `request:"mediaType=application/json"`
}

type PatchNotificationRulesIDResponse struct {
	ContentType                   string
	Error                         *interface{}
	NotificationRuleDiscriminator *interface{}
	StatusCode                    int64
}
