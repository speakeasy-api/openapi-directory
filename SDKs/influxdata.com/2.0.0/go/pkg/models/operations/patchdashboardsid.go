package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDashboardsIDPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardID"`
}

type PatchDashboardsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchDashboardsIDPatchDashboardRequestInput struct {
	Cells       *shared.CellWithViewPropertiesInput `json:"cells,omitempty"`
	Description *string                             `json:"description,omitempty"`
	Name        *string                             `json:"name,omitempty"`
}

type PatchDashboardsIDRequest struct {
	PathParams PatchDashboardsIDPathParams
	Headers    PatchDashboardsIDHeaders
	Request    PatchDashboardsIDPatchDashboardRequestInput `request:"mediaType=application/json"`
}

type PatchDashboardsIDResponse struct {
	ContentType string
	Dashboard   *shared.Dashboard
	Error       *interface{}
	StatusCode  int64
}
