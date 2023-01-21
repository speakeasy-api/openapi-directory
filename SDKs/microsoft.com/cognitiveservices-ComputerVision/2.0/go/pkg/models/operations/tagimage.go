package operations

import (
	"openapi/pkg/models/shared"
)

type TagImageQueryParams struct {
	Language *shared.ServiceLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type TagImageRequest struct {
	QueryParams TagImageQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type TagImageResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	StatusCode          int64
	TagResult           *shared.TagResult
}
