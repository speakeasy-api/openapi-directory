package operations

import (
	"openapi/pkg/models/shared"
)

type PostTasksIDOwnersPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type PostTasksIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTasksIDOwnersRequest struct {
	PathParams PostTasksIDOwnersPathParams
	Headers    PostTasksIDOwnersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostTasksIDOwnersResponse struct {
	ContentType   string
	Error         *interface{}
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
