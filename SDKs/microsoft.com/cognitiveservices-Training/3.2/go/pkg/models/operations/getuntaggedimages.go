package operations

import (
	"openapi/pkg/models/shared"
)

type GetUntaggedImagesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetUntaggedImagesOrderByEnum string

const (
	GetUntaggedImagesOrderByEnumNewest GetUntaggedImagesOrderByEnum = "Newest"
	GetUntaggedImagesOrderByEnumOldest GetUntaggedImagesOrderByEnum = "Oldest"
)

type GetUntaggedImagesQueryParams struct {
	IterationID *string                       `queryParam:"style=form,explode=true,name=iterationId"`
	OrderBy     *GetUntaggedImagesOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	Skip        *int32                        `queryParam:"style=form,explode=true,name=skip"`
	Take        *int32                        `queryParam:"style=form,explode=true,name=take"`
}

type GetUntaggedImagesRequest struct {
	PathParams  GetUntaggedImagesPathParams
	QueryParams GetUntaggedImagesQueryParams
}

type GetUntaggedImagesResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Images            []shared.Image
	StatusCode        int64
}
