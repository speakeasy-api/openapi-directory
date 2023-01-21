package operations

import (
	"openapi/pkg/models/shared"
)

type PostDeleteQueryParams struct {
	Bucket   *string `queryParam:"style=form,explode=true,name=bucket"`
	BucketID *string `queryParam:"style=form,explode=true,name=bucketID"`
	Org      *string `queryParam:"style=form,explode=true,name=org"`
	OrgID    *string `queryParam:"style=form,explode=true,name=orgID"`
}

type PostDeleteHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDeleteRequest struct {
	QueryParams PostDeleteQueryParams
	Headers     PostDeleteHeaders
	Request     shared.DeletePredicateRequest `request:"mediaType=application/json"`
}

type PostDeleteResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
