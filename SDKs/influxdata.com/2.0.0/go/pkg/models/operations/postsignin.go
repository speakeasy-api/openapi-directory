package operations

import (
	"openapi/pkg/models/shared"
)

type PostSigninHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostSigninSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostSigninRequest struct {
	Headers  PostSigninHeaders
	Security PostSigninSecurity
}

type PostSigninResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
