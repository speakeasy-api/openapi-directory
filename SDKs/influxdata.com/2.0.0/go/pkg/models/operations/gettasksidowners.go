package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksIDOwnersPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDOwnersRequest struct {
	PathParams GetTasksIDOwnersPathParams
	Headers    GetTasksIDOwnersHeaders
}

type GetTasksIDOwnersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceOwners *shared.ResourceOwners
	StatusCode     int64
}
