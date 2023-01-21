package operations

type DeleteDocumentsTemplatesIDPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateID"`
}

type DeleteDocumentsTemplatesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDocumentsTemplatesIDRequest struct {
	PathParams DeleteDocumentsTemplatesIDPathParams
	Headers    DeleteDocumentsTemplatesIDHeaders
}

type DeleteDocumentsTemplatesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
