package operations

import (
	"openapi/pkg/models/shared"
)

type PostTasksIDLabelsPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type PostTasksIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTasksIDLabelsRequest struct {
	PathParams PostTasksIDLabelsPathParams
	Headers    PostTasksIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostTasksIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
