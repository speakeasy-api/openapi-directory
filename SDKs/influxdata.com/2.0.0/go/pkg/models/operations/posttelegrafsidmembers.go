package operations

import (
	"openapi/pkg/models/shared"
)

type PostTelegrafsIDMembersPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type PostTelegrafsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTelegrafsIDMembersRequest struct {
	PathParams PostTelegrafsIDMembersPathParams
	Headers    PostTelegrafsIDMembersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostTelegrafsIDMembersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceMember *shared.ResourceMember
	StatusCode     int64
}
