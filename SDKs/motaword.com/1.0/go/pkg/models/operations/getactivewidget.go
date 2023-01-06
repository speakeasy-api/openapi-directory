package operations

import (
	"openapi/pkg/models/shared"
)

type GetActiveWidgetPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
	WidgetID  int64 `pathParam:"style=simple,explode=false,name=widgetId"`
}

type GetActiveWidgetRequest struct {
	PathParams GetActiveWidgetPathParams
}

type GetActiveWidgetResponse struct {
	ActiveWidget *shared.ActiveWidget
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
