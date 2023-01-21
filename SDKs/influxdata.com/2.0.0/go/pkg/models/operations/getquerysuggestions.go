package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuerySuggestionsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetQuerySuggestionsRequest struct {
	Headers GetQuerySuggestionsHeaders
}

type GetQuerySuggestionsResponse struct {
	ContentType     string
	Error           *interface{}
	FluxSuggestions *shared.FluxSuggestions
	StatusCode      int64
}
