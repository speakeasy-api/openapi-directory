package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelsQueryParams struct {
	OrgID *string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetLabelsRequest struct {
	QueryParams GetLabelsQueryParams
	Headers     GetLabelsHeaders
}

type GetLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
