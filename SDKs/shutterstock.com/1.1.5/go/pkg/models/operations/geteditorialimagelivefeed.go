package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialImageLivefeedPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialImageLivefeedQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialImageLivefeedSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialImageLivefeedRequest struct {
	PathParams  GetEditorialImageLivefeedPathParams
	QueryParams GetEditorialImageLivefeedQueryParams
	Security    GetEditorialImageLivefeedSecurity
}

type GetEditorialImageLivefeedResponse struct {
	ContentType            string
	EditorialImageLivefeed *shared.EditorialImageLivefeed
	StatusCode             int64
}
