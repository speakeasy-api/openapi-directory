package operations

import (
	"openapi/pkg/models/shared"
)

type ImportProjectQueryParams struct {
	Token string `queryParam:"style=form,explode=true,name=token"`
}

type ImportProjectRequest struct {
	QueryParams ImportProjectQueryParams
}

type ImportProjectResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Project           *shared.Project
	StatusCode        int64
}
