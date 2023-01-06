package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteActiveWidgetPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
	WidgetID  int64 `pathParam:"style=simple,explode=false,name=widgetId"`
}

type DeleteActiveWidgetRequest struct {
	PathParams DeleteActiveWidgetPathParams
}

type DeleteActiveWidgetResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
