package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersIDPasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type PostUsersIDPasswordHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostUsersIDPasswordSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostUsersIDPasswordRequest struct {
	PathParams PostUsersIDPasswordPathParams
	Headers    PostUsersIDPasswordHeaders
	Request    interface{} `request:"mediaType=application/json"`
	Security   PostUsersIDPasswordSecurity
}

type PostUsersIDPasswordResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
