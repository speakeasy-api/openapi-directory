package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelegrafsIDOwnersPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type GetTelegrafsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTelegrafsIDOwnersRequest struct {
	PathParams GetTelegrafsIDOwnersPathParams
	Headers    GetTelegrafsIDOwnersHeaders
}

type GetTelegrafsIDOwnersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceOwners *shared.ResourceOwners
	StatusCode     int64
}
