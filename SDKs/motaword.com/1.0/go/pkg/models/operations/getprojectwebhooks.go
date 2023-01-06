package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectWebhooksPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProjectWebhooksRequest struct {
	PathParams GetProjectWebhooksPathParams
}

type GetProjectWebhooksResponse struct {
	ContentType string
	Error       *shared.Error
	Project     *shared.Project
	StatusCode  int64
}
