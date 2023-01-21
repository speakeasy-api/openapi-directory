package operations

import (
	"openapi/pkg/models/shared"
)

type PostDocumentsTemplatesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDocumentsTemplatesRequest struct {
	Headers PostDocumentsTemplatesHeaders
	Request shared.DocumentCreateInput `request:"mediaType=application/json"`
}

type PostDocumentsTemplatesResponse struct {
	ContentType string
	Document    *shared.Document
	Error       *interface{}
	StatusCode  int64
}
