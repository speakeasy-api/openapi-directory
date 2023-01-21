package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourcesIDBucketsPathParams struct {
	SourceID string `pathParam:"style=simple,explode=false,name=sourceID"`
}

type GetSourcesIDBucketsQueryParams struct {
	Org *string `queryParam:"style=form,explode=true,name=org"`
}

type GetSourcesIDBucketsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetSourcesIDBucketsRequest struct {
	PathParams  GetSourcesIDBucketsPathParams
	QueryParams GetSourcesIDBucketsQueryParams
	Headers     GetSourcesIDBucketsHeaders
}

type GetSourcesIDBucketsResponse struct {
	Buckets     *shared.Buckets
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
