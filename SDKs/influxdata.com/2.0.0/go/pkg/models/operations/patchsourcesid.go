package operations

import (
	"openapi/pkg/models/shared"
)

type PatchSourcesIDPathParams struct {
	SourceID string `pathParam:"style=simple,explode=false,name=sourceID"`
}

type PatchSourcesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchSourcesIDRequest struct {
	PathParams PatchSourcesIDPathParams
	Headers    PatchSourcesIDHeaders
	Request    shared.SourceInput `request:"mediaType=application/json"`
}

type PatchSourcesIDResponse struct {
	ContentType string
	Error       *interface{}
	Source      *shared.Source
	StatusCode  int64
}
