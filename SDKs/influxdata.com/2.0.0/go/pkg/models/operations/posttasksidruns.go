package operations

type PostTasksIDRunsPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type PostTasksIDRunsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTasksIDRunsRequest struct {
	PathParams PostTasksIDRunsPathParams
	Headers    PostTasksIDRunsHeaders
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostTasksIDRunsResponse struct {
	ContentType string
	Error       *interface{}
	Run         *interface{}
	StatusCode  int64
}
