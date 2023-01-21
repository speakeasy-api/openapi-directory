package operations

import (
	"openapi/pkg/models/shared"
)

type PostTasksIDMembersPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type PostTasksIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTasksIDMembersRequest struct {
	PathParams PostTasksIDMembersPathParams
	Headers    PostTasksIDMembersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostTasksIDMembersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceMember *shared.ResourceMember
	StatusCode     int64
}
