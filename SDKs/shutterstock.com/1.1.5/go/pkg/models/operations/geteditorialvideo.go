package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialVideoPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialVideoQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialVideoSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialVideoRequest struct {
	PathParams  GetEditorialVideoPathParams
	QueryParams GetEditorialVideoQueryParams
	Security    GetEditorialVideoSecurity
}

type GetEditorialVideoResponse struct {
	ContentType           string
	EditorialVideoContent *shared.EditorialVideoContent
	StatusCode            int64
}
