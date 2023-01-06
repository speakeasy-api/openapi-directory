package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetImageViewEnum string

const (
	GetImageViewEnumMinimal GetImageViewEnum = "minimal"
	GetImageViewEnumFull    GetImageViewEnum = "full"
)

type GetImageQueryParams struct {
	Language *shared.LanguageEnum `queryParam:"style=form,explode=true,name=language"`
	View     *GetImageViewEnum    `queryParam:"style=form,explode=true,name=view"`
}

type GetImageSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageRequest struct {
	PathParams  GetImagePathParams
	QueryParams GetImageQueryParams
	Security    GetImageSecurity
}

type GetImageResponse struct {
	ContentType string
	Image       *shared.Image
	StatusCode  int64
}
