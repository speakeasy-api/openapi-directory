package operations

import (
	"openapi/pkg/models/shared"
)

type PatchChecksIDPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type PatchChecksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchChecksIDRequest struct {
	PathParams PatchChecksIDPathParams
	Headers    PatchChecksIDHeaders
	Request    shared.CheckPatch `request:"mediaType=application/json"`
}

type PatchChecksIDResponse struct {
	CheckDiscriminator *interface{}
	ContentType        string
	Error              *interface{}
	StatusCode         int64
}
