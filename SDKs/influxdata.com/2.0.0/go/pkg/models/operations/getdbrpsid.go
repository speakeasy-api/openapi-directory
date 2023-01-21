package operations

import (
	"openapi/pkg/models/shared"
)

type GetDbrPsIDPathParams struct {
	DbrpID string `pathParam:"style=simple,explode=false,name=dbrpID"`
}

type GetDbrPsIDQueryParams struct {
	OrgID string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetDbrPsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDbrPsIDRequest struct {
	PathParams  GetDbrPsIDPathParams
	QueryParams GetDbrPsIDQueryParams
	Headers     GetDbrPsIDHeaders
}

type GetDbrPsIDResponse struct {
	ContentType string
	DBRP        *shared.Dbrp
	Error       *interface{}
	StatusCode  int64
}
