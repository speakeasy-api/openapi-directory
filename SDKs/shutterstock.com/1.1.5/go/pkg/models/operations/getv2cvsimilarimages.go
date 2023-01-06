package operations

import (
	"openapi/pkg/models/shared"
)

type GetV2CvSimilarImagesLicenseEnum string

const (
	GetV2CvSimilarImagesLicenseEnumCommercial GetV2CvSimilarImagesLicenseEnum = "commercial"
	GetV2CvSimilarImagesLicenseEnumEditorial  GetV2CvSimilarImagesLicenseEnum = "editorial"
)

type GetV2CvSimilarImagesViewEnum string

const (
	GetV2CvSimilarImagesViewEnumMinimal GetV2CvSimilarImagesViewEnum = "minimal"
	GetV2CvSimilarImagesViewEnumFull    GetV2CvSimilarImagesViewEnum = "full"
)

type GetV2CvSimilarImagesQueryParams struct {
	AssetID  string                            `queryParam:"style=form,explode=true,name=asset_id"`
	Language *shared.LanguageEnum              `queryParam:"style=form,explode=true,name=language"`
	License  []GetV2CvSimilarImagesLicenseEnum `queryParam:"style=form,explode=true,name=license"`
	Page     *int64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                            `queryParam:"style=form,explode=true,name=per_page"`
	Safe     *bool                             `queryParam:"style=form,explode=true,name=safe"`
	View     *GetV2CvSimilarImagesViewEnum     `queryParam:"style=form,explode=true,name=view"`
}

type GetV2CvSimilarImagesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetV2CvSimilarImagesRequest struct {
	QueryParams GetV2CvSimilarImagesQueryParams
	Security    GetV2CvSimilarImagesSecurity
}

type GetV2CvSimilarImagesResponse struct {
	ContentType        string
	ImageSearchResults *shared.ImageSearchResults
	StatusCode         int64
}
