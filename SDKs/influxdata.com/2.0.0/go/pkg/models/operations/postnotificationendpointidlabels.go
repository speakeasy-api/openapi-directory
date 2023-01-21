package operations

import (
	"openapi/pkg/models/shared"
)

type PostNotificationEndpointIDLabelsPathParams struct {
	EndpointID string `pathParam:"style=simple,explode=false,name=endpointID"`
}

type PostNotificationEndpointIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostNotificationEndpointIDLabelsRequest struct {
	PathParams PostNotificationEndpointIDLabelsPathParams
	Headers    PostNotificationEndpointIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostNotificationEndpointIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
