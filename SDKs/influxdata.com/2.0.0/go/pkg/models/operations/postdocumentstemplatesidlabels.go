package operations

import (
	"openapi/pkg/models/shared"
)

type PostDocumentsTemplatesIDLabelsPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateID"`
}

type PostDocumentsTemplatesIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDocumentsTemplatesIDLabelsRequest struct {
	PathParams PostDocumentsTemplatesIDLabelsPathParams
	Headers    PostDocumentsTemplatesIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostDocumentsTemplatesIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
