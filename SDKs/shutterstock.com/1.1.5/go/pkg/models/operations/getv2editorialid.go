package operations

import (
	"openapi/pkg/models/shared"
)

type GetV2EditorialIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetV2EditorialIDQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetV2EditorialIDSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetV2EditorialIDRequest struct {
	PathParams  GetV2EditorialIDPathParams
	QueryParams GetV2EditorialIDQueryParams
	Security    GetV2EditorialIDSecurity
}

type GetV2EditorialIDResponse struct {
	ContentType      string
	EditorialContent *shared.EditorialContent
	StatusCode       int64
}
