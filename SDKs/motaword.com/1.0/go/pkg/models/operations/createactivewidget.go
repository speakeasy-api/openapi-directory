package operations

import (
	"openapi/pkg/models/shared"
)

type CreateActiveWidgetPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type CreateActiveWidgetRequest struct {
	PathParams CreateActiveWidgetPathParams
	Request    *shared.ActiveWidget `request:"mediaType=application/json"`
}

type CreateActiveWidgetResponse struct {
	ActiveWidget *shared.ActiveWidget
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
