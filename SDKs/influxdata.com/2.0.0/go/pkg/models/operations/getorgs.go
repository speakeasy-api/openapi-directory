package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrgsQueryParams struct {
	Descending *bool   `queryParam:"style=form,explode=true,name=descending"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int64  `queryParam:"style=form,explode=true,name=offset"`
	Org        *string `queryParam:"style=form,explode=true,name=org"`
	OrgID      *string `queryParam:"style=form,explode=true,name=orgID"`
	UserID     *string `queryParam:"style=form,explode=true,name=userID"`
}

type GetOrgsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetOrgsRequest struct {
	QueryParams GetOrgsQueryParams
	Headers     GetOrgsHeaders
}

type GetOrgsResponse struct {
	ContentType   string
	Error         *interface{}
	Organizations *shared.Organizations
	StatusCode    int64
}
