package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialLivefeedPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialLivefeedQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialLivefeedSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialLivefeedRequest struct {
	PathParams  GetEditorialLivefeedPathParams
	QueryParams GetEditorialLivefeedQueryParams
	Security    GetEditorialLivefeedSecurity
}

type GetEditorialLivefeedResponse struct {
	ContentType       string
	EditorialLivefeed *shared.EditorialLivefeed
	StatusCode        int64
}
