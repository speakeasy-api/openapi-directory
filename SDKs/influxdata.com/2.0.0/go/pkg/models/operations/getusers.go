package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	After  *string `queryParam:"style=form,explode=true,name=after"`
	ID     *string `queryParam:"style=form,explode=true,name=id"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type GetUsersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
	Headers     GetUsersHeaders
}

type GetUsersResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Users       *shared.Users
}
