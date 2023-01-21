package operations

import (
	"openapi/pkg/models/shared"
)

type PostQueryAstHeaders struct {
	ContentType  *shared.TraceSpanEnum3 `header:"style=simple,explode=false,name=Content-Type"`
	ZapTraceSpan *string                `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostQueryAstRequest struct {
	Headers PostQueryAstHeaders
	Request *shared.LanguageRequest `request:"mediaType=application/json"`
}

type PostQueryAstResponse struct {
	ASTResponse *shared.AstResponse
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
