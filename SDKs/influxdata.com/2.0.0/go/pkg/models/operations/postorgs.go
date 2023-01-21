package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrgsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostOrgsRequest struct {
	Headers PostOrgsHeaders
	Request shared.PostOrganizationRequest `request:"mediaType=application/json"`
}

type PostOrgsResponse struct {
	ContentType  string
	Error        *interface{}
	Organization *interface{}
	StatusCode   int64
}
