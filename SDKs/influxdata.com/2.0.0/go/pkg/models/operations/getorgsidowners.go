package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrgsIDOwnersPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type GetOrgsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetOrgsIDOwnersRequest struct {
	PathParams GetOrgsIDOwnersPathParams
	Headers    GetOrgsIDOwnersHeaders
}

type GetOrgsIDOwnersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceOwners *shared.ResourceOwners
	StatusCode     int64
}
