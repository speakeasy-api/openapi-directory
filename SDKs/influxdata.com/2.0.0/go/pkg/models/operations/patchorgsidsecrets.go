package operations

type PatchOrgsIDSecretsPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type PatchOrgsIDSecretsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchOrgsIDSecretsRequest struct {
	PathParams PatchOrgsIDSecretsPathParams
	Headers    PatchOrgsIDSecretsHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PatchOrgsIDSecretsResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
