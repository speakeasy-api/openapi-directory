package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuerySuggestionsNamePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetQuerySuggestionsNameHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetQuerySuggestionsNameRequest struct {
	PathParams GetQuerySuggestionsNamePathParams
	Headers    GetQuerySuggestionsNameHeaders
}

type GetQuerySuggestionsNameResponse struct {
	ContentType    string
	Error          *interface{}
	FluxSuggestion *shared.FluxSuggestion
	StatusCode     int64
}
