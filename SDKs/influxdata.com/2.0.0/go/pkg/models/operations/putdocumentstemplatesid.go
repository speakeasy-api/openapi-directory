package operations

import (
	"openapi/pkg/models/shared"
)

type PutDocumentsTemplatesIDPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateID"`
}

type PutDocumentsTemplatesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutDocumentsTemplatesIDRequest struct {
	PathParams PutDocumentsTemplatesIDPathParams
	Headers    PutDocumentsTemplatesIDHeaders
	Request    shared.DocumentUpdateInput `request:"mediaType=application/json"`
}

type PutDocumentsTemplatesIDResponse struct {
	ContentType string
	Document    *shared.Document
	Error       *interface{}
	StatusCode  int64
}
