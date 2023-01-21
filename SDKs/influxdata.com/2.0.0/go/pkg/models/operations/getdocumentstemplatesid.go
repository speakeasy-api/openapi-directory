package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentsTemplatesIDPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateID"`
}

type GetDocumentsTemplatesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDocumentsTemplatesIDRequest struct {
	PathParams GetDocumentsTemplatesIDPathParams
	Headers    GetDocumentsTemplatesIDHeaders
}

type GetDocumentsTemplatesIDResponse struct {
	ContentType string
	Document    *shared.Document
	Error       *interface{}
	StatusCode  int64
}
