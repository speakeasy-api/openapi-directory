package operations

type PutChecksIDPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type PutChecksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutChecksIDRequest struct {
	PathParams PutChecksIDPathParams
	Headers    PutChecksIDHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PutChecksIDResponse struct {
	CheckDiscriminator *interface{}
	ContentType        string
	Error              *interface{}
	StatusCode         int64
}
