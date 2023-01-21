package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImageQueryParams struct {
	Language      *shared.ServiceLanguageEnum `queryParam:"style=form,explode=true,name=language"`
	MaxCandidates *int32                      `queryParam:"style=form,explode=true,name=maxCandidates"`
}

type DescribeImageRequest struct {
	QueryParams DescribeImageQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type DescribeImageResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	ImageDescription    *shared.ImageDescription
	StatusCode          int64
}
