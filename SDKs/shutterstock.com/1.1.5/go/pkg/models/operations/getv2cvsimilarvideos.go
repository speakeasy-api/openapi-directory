package operations

import (
	"openapi/pkg/models/shared"
)

type GetV2CvSimilarVideosLicenseEnum string

const (
	GetV2CvSimilarVideosLicenseEnumCommercial GetV2CvSimilarVideosLicenseEnum = "commercial"
	GetV2CvSimilarVideosLicenseEnumEditorial  GetV2CvSimilarVideosLicenseEnum = "editorial"
)

type GetV2CvSimilarVideosViewEnum string

const (
	GetV2CvSimilarVideosViewEnumMinimal GetV2CvSimilarVideosViewEnum = "minimal"
	GetV2CvSimilarVideosViewEnumFull    GetV2CvSimilarVideosViewEnum = "full"
)

type GetV2CvSimilarVideosQueryParams struct {
	AssetID  string                            `queryParam:"style=form,explode=true,name=asset_id"`
	Language *shared.LanguageEnum              `queryParam:"style=form,explode=true,name=language"`
	License  []GetV2CvSimilarVideosLicenseEnum `queryParam:"style=form,explode=true,name=license"`
	Page     *int64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                            `queryParam:"style=form,explode=true,name=per_page"`
	Safe     *bool                             `queryParam:"style=form,explode=true,name=safe"`
	View     *GetV2CvSimilarVideosViewEnum     `queryParam:"style=form,explode=true,name=view"`
}

type GetV2CvSimilarVideosSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetV2CvSimilarVideosRequest struct {
	QueryParams GetV2CvSimilarVideosQueryParams
	Security    GetV2CvSimilarVideosSecurity
}

type GetV2CvSimilarVideosResponse struct {
	ContentType        string
	StatusCode         int64
	VideoSearchResults *shared.VideoSearchResults
}
