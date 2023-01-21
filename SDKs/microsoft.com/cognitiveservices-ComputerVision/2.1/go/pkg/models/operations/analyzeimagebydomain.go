package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyzeImageByDomainPathParams struct {
	Model string `pathParam:"style=simple,explode=false,name=model"`
}

type AnalyzeImageByDomainQueryParams struct {
	Language *shared.ServiceLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type AnalyzeImageByDomainRequest struct {
	PathParams  AnalyzeImageByDomainPathParams
	QueryParams AnalyzeImageByDomainQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type AnalyzeImageByDomainResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	DomainModelResults  *shared.DomainModelResults
	StatusCode          int64
}
