package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariablesQueryParams struct {
	Org   *string `queryParam:"style=form,explode=true,name=org"`
	OrgID *string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetVariablesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetVariablesRequest struct {
	QueryParams GetVariablesQueryParams
	Headers     GetVariablesHeaders
}

type GetVariablesResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Variables   *shared.Variables
}
