package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrgsIDSecretsPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type PostOrgsIDSecretsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostOrgsIDSecretsRequest struct {
	PathParams PostOrgsIDSecretsPathParams
	Headers    PostOrgsIDSecretsHeaders
	Request    shared.SecretKeys `request:"mediaType=application/json"`
}

type PostOrgsIDSecretsResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
