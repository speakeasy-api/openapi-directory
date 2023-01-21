package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrgsIDMembersPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type PostOrgsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostOrgsIDMembersRequest struct {
	PathParams PostOrgsIDMembersPathParams
	Headers    PostOrgsIDMembersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostOrgsIDMembersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceMember *shared.ResourceMember
	StatusCode     int64
}
