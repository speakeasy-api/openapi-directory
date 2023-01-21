package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDbrpidPathParams struct {
	DbrpID string `pathParam:"style=simple,explode=false,name=dbrpID"`
}

type PatchDbrpidQueryParams struct {
	OrgID string `queryParam:"style=form,explode=true,name=orgID"`
}

type PatchDbrpidHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchDbrpidRequest struct {
	PathParams  PatchDbrpidPathParams
	QueryParams PatchDbrpidQueryParams
	Headers     PatchDbrpidHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type PatchDbrpidResponse struct {
	ContentType string
	DBRP        *shared.Dbrp
	Error       *interface{}
	StatusCode  int64
}
