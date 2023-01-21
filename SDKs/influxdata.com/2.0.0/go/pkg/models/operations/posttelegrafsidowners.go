package operations

import (
	"openapi/pkg/models/shared"
)

type PostTelegrafsIDOwnersPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type PostTelegrafsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTelegrafsIDOwnersRequest struct {
	PathParams PostTelegrafsIDOwnersPathParams
	Headers    PostTelegrafsIDOwnersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostTelegrafsIDOwnersResponse struct {
	ContentType   string
	Error         *interface{}
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
