package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrgsIDSecretsPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type GetOrgsIDSecretsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetOrgsIDSecretsRequest struct {
	PathParams GetOrgsIDSecretsPathParams
	Headers    GetOrgsIDSecretsHeaders
}

type GetOrgsIDSecretsResponse struct {
	ContentType        string
	Error              *interface{}
	SecretKeysResponse *shared.SecretKeysResponse
	StatusCode         int64
}
