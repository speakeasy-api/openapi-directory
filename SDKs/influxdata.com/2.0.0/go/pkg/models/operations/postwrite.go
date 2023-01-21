package operations

import (
	"openapi/pkg/models/shared"
)

type PostWriteQueryParams struct {
	Bucket    string                     `queryParam:"style=form,explode=true,name=bucket"`
	Org       string                     `queryParam:"style=form,explode=true,name=org"`
	OrgID     *string                    `queryParam:"style=form,explode=true,name=orgID"`
	Precision *shared.WritePrecisionEnum `queryParam:"style=form,explode=true,name=precision"`
}

type PostWriteHeaders struct {
	Accept          *shared.TraceSpanEnum3 `header:"style=simple,explode=false,name=Accept"`
	ContentEncoding *shared.TraceSpanEnum1 `header:"style=simple,explode=false,name=Content-Encoding"`
	ContentLength   *int64                 `header:"style=simple,explode=false,name=Content-Length"`
	ContentType     *shared.TraceSpanEnum6 `header:"style=simple,explode=false,name=Content-Type"`
	ZapTraceSpan    *string                `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostWriteRequest struct {
	QueryParams PostWriteQueryParams
	Headers     PostWriteHeaders
	Request     string `request:"mediaType=text/plain"`
}

type PostWriteResponse struct {
	ContentType             string
	Error                   *interface{}
	Headers                 map[string][]string
	LineProtocolError       *interface{}
	LineProtocolLengthError *interface{}
	StatusCode              int64
}
