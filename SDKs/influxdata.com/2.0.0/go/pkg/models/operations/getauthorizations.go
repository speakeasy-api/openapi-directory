package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizationsQueryParams struct {
	Org    *string `queryParam:"style=form,explode=true,name=org"`
	OrgID  *string `queryParam:"style=form,explode=true,name=orgID"`
	User   *string `queryParam:"style=form,explode=true,name=user"`
	UserID *string `queryParam:"style=form,explode=true,name=userID"`
}

type GetAuthorizationsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetAuthorizationsRequest struct {
	QueryParams GetAuthorizationsQueryParams
	Headers     GetAuthorizationsHeaders
}

type GetAuthorizationsResponse struct {
	Authorizations *shared.Authorizations
	ContentType    string
	Error          *interface{}
	StatusCode     int64
}
