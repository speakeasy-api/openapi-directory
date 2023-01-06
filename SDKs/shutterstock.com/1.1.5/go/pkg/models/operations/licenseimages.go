package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseImagesFormatEnum string

const (
	LicenseImagesFormatEnumEps LicenseImagesFormatEnum = "eps"
	LicenseImagesFormatEnumJpg LicenseImagesFormatEnum = "jpg"
)

type LicenseImagesSizeEnum string

const (
	LicenseImagesSizeEnumSmall  LicenseImagesSizeEnum = "small"
	LicenseImagesSizeEnumMedium LicenseImagesSizeEnum = "medium"
	LicenseImagesSizeEnumHuge   LicenseImagesSizeEnum = "huge"
	LicenseImagesSizeEnumVector LicenseImagesSizeEnum = "vector"
	LicenseImagesSizeEnumCustom LicenseImagesSizeEnum = "custom"
)

type LicenseImagesQueryParams struct {
	Format         *LicenseImagesFormatEnum `queryParam:"style=form,explode=true,name=format"`
	SearchID       *string                  `queryParam:"style=form,explode=true,name=search_id"`
	Size           *LicenseImagesSizeEnum   `queryParam:"style=form,explode=true,name=size"`
	SubscriptionID *string                  `queryParam:"style=form,explode=true,name=subscription_id"`
}

type LicenseImagesSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type LicenseImagesRequest struct {
	QueryParams LicenseImagesQueryParams
	Request     shared.LicenseImageRequest `request:"mediaType=application/json"`
	Security    LicenseImagesSecurity
}

type LicenseImagesResponse struct {
	ContentType                string
	LicenseImageResultDataList *interface{}
	StatusCode                 int64
}
