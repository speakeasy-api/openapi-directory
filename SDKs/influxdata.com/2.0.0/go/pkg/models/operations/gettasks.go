package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksQueryParams struct {
	After  *string                `queryParam:"style=form,explode=true,name=after"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Name   *string                `queryParam:"style=form,explode=true,name=name"`
	Org    *string                `queryParam:"style=form,explode=true,name=org"`
	OrgID  *string                `queryParam:"style=form,explode=true,name=orgID"`
	Status *shared.TraceSpanEnum4 `queryParam:"style=form,explode=true,name=status"`
	User   *string                `queryParam:"style=form,explode=true,name=user"`
}

type GetTasksHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksRequest struct {
	QueryParams GetTasksQueryParams
	Headers     GetTasksHeaders
}

type GetTasksResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Tasks       *shared.Tasks
}
