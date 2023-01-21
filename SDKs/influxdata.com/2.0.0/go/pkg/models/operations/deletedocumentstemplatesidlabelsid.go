package operations

type DeleteDocumentsTemplatesIDLabelsIDPathParams struct {
	LabelID    string `pathParam:"style=simple,explode=false,name=labelID"`
	TemplateID string `pathParam:"style=simple,explode=false,name=templateID"`
}

type DeleteDocumentsTemplatesIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDocumentsTemplatesIDLabelsIDRequest struct {
	PathParams DeleteDocumentsTemplatesIDLabelsIDPathParams
	Headers    DeleteDocumentsTemplatesIDLabelsIDHeaders
}

type DeleteDocumentsTemplatesIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
