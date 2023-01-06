package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarVideosPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSimilarVideosViewEnum string

const (
	GetSimilarVideosViewEnumMinimal GetSimilarVideosViewEnum = "minimal"
	GetSimilarVideosViewEnumFull    GetSimilarVideosViewEnum = "full"
)

type GetSimilarVideosQueryParams struct {
	Language *shared.LanguageEnum      `queryParam:"style=form,explode=true,name=language"`
	Page     *int64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                    `queryParam:"style=form,explode=true,name=per_page"`
	View     *GetSimilarVideosViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetSimilarVideosSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetSimilarVideosRequest struct {
	PathParams  GetSimilarVideosPathParams
	QueryParams GetSimilarVideosQueryParams
	Security    GetSimilarVideosSecurity
}

type GetSimilarVideosResponse struct {
	ContentType        string
	StatusCode         int64
	VideoSearchResults *shared.VideoSearchResults
}
