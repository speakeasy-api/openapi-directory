package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketsQueryParams struct {
	After  *string `queryParam:"style=form,explode=true,name=after"`
	ID     *string `queryParam:"style=form,explode=true,name=id"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Org    *string `queryParam:"style=form,explode=true,name=org"`
	OrgID  *string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetBucketsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetBucketsRequest struct {
	QueryParams GetBucketsQueryParams
	Headers     GetBucketsHeaders
}

type GetBucketsResponse struct {
	Buckets     *shared.Buckets
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
