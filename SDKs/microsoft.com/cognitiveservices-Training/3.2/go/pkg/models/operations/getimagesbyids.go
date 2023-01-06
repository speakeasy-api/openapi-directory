package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesByIdsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetImagesByIdsQueryParams struct {
	ImageIds    []string `queryParam:"style=form,explode=false,name=imageIds"`
	IterationID *string  `queryParam:"style=form,explode=true,name=iterationId"`
}

type GetImagesByIdsRequest struct {
	PathParams  GetImagesByIdsPathParams
	QueryParams GetImagesByIdsQueryParams
}

type GetImagesByIdsResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Images            []shared.Image
	StatusCode        int64
}
