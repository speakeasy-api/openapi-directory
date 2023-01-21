package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelegrafsIDMembersPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type GetTelegrafsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTelegrafsIDMembersRequest struct {
	PathParams GetTelegrafsIDMembersPathParams
	Headers    GetTelegrafsIDMembersHeaders
}

type GetTelegrafsIDMembersResponse struct {
	ContentType     string
	Error           *interface{}
	ResourceMembers *shared.ResourceMembers
	StatusCode      int64
}
