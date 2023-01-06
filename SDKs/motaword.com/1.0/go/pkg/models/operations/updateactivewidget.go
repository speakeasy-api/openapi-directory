package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateActiveWidgetPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
	WidgetID  int64 `pathParam:"style=simple,explode=false,name=widgetId"`
}

type UpdateActiveWidgetRequest struct {
	PathParams UpdateActiveWidgetPathParams
	Request    *shared.ActiveWidget `request:"mediaType=application/json"`
}

type UpdateActiveWidgetResponse struct {
	ActiveWidget *shared.ActiveWidget
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
