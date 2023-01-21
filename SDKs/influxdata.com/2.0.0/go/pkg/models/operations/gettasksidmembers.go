package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksIDMembersPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDMembersRequest struct {
	PathParams GetTasksIDMembersPathParams
	Headers    GetTasksIDMembersHeaders
}

type GetTasksIDMembersResponse struct {
	ContentType     string
	Error           *interface{}
	ResourceMembers *shared.ResourceMembers
	StatusCode      int64
}
