package operations

import (
	"openapi/pkg/models/shared"
)

type PostNotificationRuleIDLabelsPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type PostNotificationRuleIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostNotificationRuleIDLabelsRequest struct {
	PathParams PostNotificationRuleIDLabelsPathParams
	Headers    PostNotificationRuleIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostNotificationRuleIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
