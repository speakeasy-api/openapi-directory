package operations

import (
	"openapi/pkg/models/shared"
)

type PatchOrgsIDPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type PatchOrgsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchOrgsIDRequest struct {
	PathParams PatchOrgsIDPathParams
	Headers    PatchOrgsIDHeaders
	Request    shared.PatchOrganizationRequest `request:"mediaType=application/json"`
}

type PatchOrgsIDResponse struct {
	ContentType  string
	Error        *interface{}
	Organization *interface{}
	StatusCode   int64
}
