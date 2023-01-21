package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationRulesIDLabelsPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type GetNotificationRulesIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetNotificationRulesIDLabelsRequest struct {
	PathParams GetNotificationRulesIDLabelsPathParams
	Headers    GetNotificationRulesIDLabelsHeaders
}

type GetNotificationRulesIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
