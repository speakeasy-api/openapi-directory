package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyzeImageQueryParams struct {
	Details        []shared.VisualFeaturesEnum1 `queryParam:"style=form,explode=false,name=details"`
	Language       *shared.ServiceLanguageEnum  `queryParam:"style=form,explode=true,name=language"`
	VisualFeatures []shared.VisualFeaturesEnum  `queryParam:"style=form,explode=false,name=visualFeatures"`
}

type AnalyzeImageRequest struct {
	QueryParams AnalyzeImageQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type AnalyzeImageResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	ImageAnalysis       *shared.ImageAnalysis
	StatusCode          int64
}
