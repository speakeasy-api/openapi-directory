package operations

import (
	"openapi/pkg/models/shared"
)

type PostAuthorizationsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostAuthorizationsRequest struct {
	Headers PostAuthorizationsHeaders
	Request shared.AuthorizationPostRequest `request:"mediaType=application/json"`
}

type PostAuthorizationsResponse struct {
	Authorization *shared.Authorization
	ContentType   string
	Error         *interface{}
	StatusCode    int64
}
