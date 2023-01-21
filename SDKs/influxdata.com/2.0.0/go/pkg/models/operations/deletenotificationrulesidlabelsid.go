package operations

type DeleteNotificationRulesIDLabelsIDPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=labelID"`
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleID"`
}

type DeleteNotificationRulesIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteNotificationRulesIDLabelsIDRequest struct {
	PathParams DeleteNotificationRulesIDLabelsIDPathParams
	Headers    DeleteNotificationRulesIDLabelsIDHeaders
}

type DeleteNotificationRulesIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
