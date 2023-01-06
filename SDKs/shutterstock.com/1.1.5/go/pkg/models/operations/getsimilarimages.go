package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarImagesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSimilarImagesViewEnum string

const (
	GetSimilarImagesViewEnumMinimal GetSimilarImagesViewEnum = "minimal"
	GetSimilarImagesViewEnumFull    GetSimilarImagesViewEnum = "full"
)

type GetSimilarImagesQueryParams struct {
	Language *shared.LanguageEnum      `queryParam:"style=form,explode=true,name=language"`
	Page     *int64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                    `queryParam:"style=form,explode=true,name=per_page"`
	View     *GetSimilarImagesViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetSimilarImagesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetSimilarImagesRequest struct {
	PathParams  GetSimilarImagesPathParams
	QueryParams GetSimilarImagesQueryParams
	Security    GetSimilarImagesSecurity
}

type GetSimilarImagesResponse struct {
	ContentType        string
	ImageSearchResults *shared.ImageSearchResults
	StatusCode         int64
}
