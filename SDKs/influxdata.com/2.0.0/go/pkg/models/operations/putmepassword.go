package operations

import (
	"openapi/pkg/models/shared"
)

type PutMePasswordHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutMePasswordSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PutMePasswordRequest struct {
	Headers  PutMePasswordHeaders
	Request  interface{} `request:"mediaType=application/json"`
	Security PutMePasswordSecurity
}

type PutMePasswordResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
