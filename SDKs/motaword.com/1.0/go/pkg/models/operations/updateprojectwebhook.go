package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectWebhookPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateProjectWebhookRequestBody struct {
	CallbackURL *string `json:"callback_url,omitempty"`
}

type UpdateProjectWebhookRequest struct {
	PathParams UpdateProjectWebhookPathParams
	Request    *UpdateProjectWebhookRequestBody `request:"mediaType=application/json"`
}

type UpdateProjectWebhookResponse struct {
	ContentType string
	Error       *shared.Error
	Project     *shared.Project
	StatusCode  int64
}
