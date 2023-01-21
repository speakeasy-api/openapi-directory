package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksIDLabelsPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDLabelsRequest struct {
	PathParams GetTasksIDLabelsPathParams
	Headers    GetTasksIDLabelsHeaders
}

type GetTasksIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
