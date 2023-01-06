package operations

import (
	"openapi/pkg/models/shared"
)

type PostProjectWebhookPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostProjectWebhookRequestBody struct {
	CallbackURL *string `json:"callback_url,omitempty"`
}

type PostProjectWebhookRequest struct {
	PathParams PostProjectWebhookPathParams
	Request    *PostProjectWebhookRequestBody `request:"mediaType=application/json"`
}

type PostProjectWebhookResponse struct {
	ContentType string
	Error       *shared.Error
	Project     *shared.Project
	StatusCode  int64
}
