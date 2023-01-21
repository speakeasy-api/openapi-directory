package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrgsIDMembersPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type GetOrgsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetOrgsIDMembersRequest struct {
	PathParams GetOrgsIDMembersPathParams
	Headers    GetOrgsIDMembersHeaders
}

type GetOrgsIDMembersResponse struct {
	ContentType     string
	Error           *interface{}
	ResourceMembers *shared.ResourceMembers
	StatusCode      int64
}
