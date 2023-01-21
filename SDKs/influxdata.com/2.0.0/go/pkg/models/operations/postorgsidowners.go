package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrgsIDOwnersPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type PostOrgsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostOrgsIDOwnersRequest struct {
	PathParams PostOrgsIDOwnersPathParams
	Headers    PostOrgsIDOwnersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostOrgsIDOwnersResponse struct {
	ContentType   string
	Error         *interface{}
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
