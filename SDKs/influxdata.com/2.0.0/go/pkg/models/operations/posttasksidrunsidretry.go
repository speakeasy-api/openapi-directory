package operations

type PostTasksIDRunsIDRetryPathParams struct {
	RunID  string `pathParam:"style=simple,explode=false,name=runID"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type PostTasksIDRunsIDRetryHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTasksIDRunsIDRetryRequest struct {
	PathParams PostTasksIDRunsIDRetryPathParams
	Headers    PostTasksIDRunsIDRetryHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostTasksIDRunsIDRetryResponse struct {
	ContentType string
	Error       *interface{}
	Run         *interface{}
	StatusCode  int64
}
