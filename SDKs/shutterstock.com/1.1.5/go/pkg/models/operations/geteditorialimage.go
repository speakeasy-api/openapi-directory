package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialImagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialImageQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialImageSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialImageRequest struct {
	PathParams  GetEditorialImagePathParams
	QueryParams GetEditorialImageQueryParams
	Security    GetEditorialImageSecurity
}

type GetEditorialImageResponse struct {
	ContentType      string
	EditorialContent *shared.EditorialContent
	StatusCode       int64
}
