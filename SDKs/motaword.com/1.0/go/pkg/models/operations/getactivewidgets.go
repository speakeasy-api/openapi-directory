package operations

import (
	"openapi/pkg/models/shared"
)

type GetActiveWidgetsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetActiveWidgetsRequest struct {
	PathParams GetActiveWidgetsPathParams
}

type GetActiveWidgetsResponse struct {
	ActiveWidgetList *shared.ActiveWidgetList
	ContentType      string
	Error            *shared.Error
	StatusCode       int64
}
