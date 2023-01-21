package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTasksIDRunsPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDRunsQueryParams struct {
	After      *string    `queryParam:"style=form,explode=true,name=after"`
	AfterTime  *time.Time `queryParam:"style=form,explode=true,name=afterTime"`
	BeforeTime *time.Time `queryParam:"style=form,explode=true,name=beforeTime"`
	Limit      *int64     `queryParam:"style=form,explode=true,name=limit"`
}

type GetTasksIDRunsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDRunsRequest struct {
	PathParams  GetTasksIDRunsPathParams
	QueryParams GetTasksIDRunsQueryParams
	Headers     GetTasksIDRunsHeaders
}

type GetTasksIDRunsResponse struct {
	ContentType string
	Error       *interface{}
	Runs        *shared.Runs
	StatusCode  int64
}
