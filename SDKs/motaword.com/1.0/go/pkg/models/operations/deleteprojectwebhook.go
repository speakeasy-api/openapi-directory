package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectWebhookPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteProjectWebhookRequest struct {
	PathParams DeleteProjectWebhookPathParams
}

type DeleteProjectWebhookResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
