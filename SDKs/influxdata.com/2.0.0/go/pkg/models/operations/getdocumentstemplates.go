package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentsTemplatesQueryParams struct {
	Org   *string `queryParam:"style=form,explode=true,name=org"`
	OrgID *string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetDocumentsTemplatesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDocumentsTemplatesRequest struct {
	QueryParams GetDocumentsTemplatesQueryParams
	Headers     GetDocumentsTemplatesHeaders
}

type GetDocumentsTemplatesResponse struct {
	ContentType string
	Documents   *shared.Documents
	Error       *interface{}
	StatusCode  int64
}
