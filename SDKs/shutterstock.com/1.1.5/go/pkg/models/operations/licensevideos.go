package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseVideosSizeEnum string

const (
	LicenseVideosSizeEnumWeb   LicenseVideosSizeEnum = "web"
	LicenseVideosSizeEnumSd    LicenseVideosSizeEnum = "sd"
	LicenseVideosSizeEnumHd    LicenseVideosSizeEnum = "hd"
	LicenseVideosSizeEnumFourk LicenseVideosSizeEnum = "4k"
)

type LicenseVideosQueryParams struct {
	SearchID       *string                `queryParam:"style=form,explode=true,name=search_id"`
	Size           *LicenseVideosSizeEnum `queryParam:"style=form,explode=true,name=size"`
	SubscriptionID *string                `queryParam:"style=form,explode=true,name=subscription_id"`
}

type LicenseVideosSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type LicenseVideosRequest struct {
	QueryParams LicenseVideosQueryParams
	Request     shared.LicenseVideoRequest `request:"mediaType=application/json"`
	Security    LicenseVideosSecurity
}

type LicenseVideosResponse struct {
	ContentType                string
	LicenseVideoResultDataList *interface{}
	StatusCode                 int64
}
