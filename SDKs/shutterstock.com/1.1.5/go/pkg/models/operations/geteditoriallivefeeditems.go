package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialLivefeedItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialLivefeedItemsQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialLivefeedItemsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialLivefeedItemsRequest struct {
	PathParams  GetEditorialLivefeedItemsPathParams
	QueryParams GetEditorialLivefeedItemsQueryParams
	Security    GetEditorialLivefeedItemsSecurity
}

type GetEditorialLivefeedItemsResponse struct {
	ContentType              string
	EditorialContentDataList *interface{}
	StatusCode               int64
}
