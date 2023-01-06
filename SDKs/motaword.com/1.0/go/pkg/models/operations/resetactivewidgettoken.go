package operations

import (
	"openapi/pkg/models/shared"
)

type ResetActiveWidgetTokenPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
	WidgetID  int64 `pathParam:"style=simple,explode=false,name=widgetId"`
}

type ResetActiveWidgetTokenRequest struct {
	PathParams ResetActiveWidgetTokenPathParams
}

type ResetActiveWidgetTokenResponse struct {
	ActiveWidget *shared.ActiveWidget
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
