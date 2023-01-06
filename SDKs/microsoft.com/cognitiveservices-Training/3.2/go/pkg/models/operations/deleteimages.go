package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImagesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteImagesQueryParams struct {
	AllImages     *bool    `queryParam:"style=form,explode=true,name=allImages"`
	AllIterations *bool    `queryParam:"style=form,explode=true,name=allIterations"`
	ImageIds      []string `queryParam:"style=form,explode=false,name=imageIds"`
}

type DeleteImagesRequest struct {
	PathParams  DeleteImagesPathParams
	QueryParams DeleteImagesQueryParams
}

type DeleteImagesResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	StatusCode        int64
}
