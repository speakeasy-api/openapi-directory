package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentsTemplatesIDLabelsPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateID"`
}

type GetDocumentsTemplatesIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDocumentsTemplatesIDLabelsRequest struct {
	PathParams GetDocumentsTemplatesIDLabelsPathParams
	Headers    GetDocumentsTemplatesIDLabelsHeaders
}

type GetDocumentsTemplatesIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
