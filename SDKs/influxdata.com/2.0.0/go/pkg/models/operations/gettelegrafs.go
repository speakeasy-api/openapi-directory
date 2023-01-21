package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelegrafsQueryParams struct {
	OrgID *string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetTelegrafsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTelegrafsRequest struct {
	QueryParams GetTelegrafsQueryParams
	Headers     GetTelegrafsHeaders
}

type GetTelegrafsResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Telegrafs   *shared.Telegrafs
}
