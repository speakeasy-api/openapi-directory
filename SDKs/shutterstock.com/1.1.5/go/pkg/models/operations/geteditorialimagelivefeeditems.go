package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialImageLivefeedItemsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialImageLivefeedItemsQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialImageLivefeedItemsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialImageLivefeedItemsRequest struct {
	PathParams  GetEditorialImageLivefeedItemsPathParams
	QueryParams GetEditorialImageLivefeedItemsQueryParams
	Security    GetEditorialImageLivefeedItemsSecurity
}

type GetEditorialImageLivefeedItemsResponse struct {
	ContentType                   string
	EditorialImageContentDataList *interface{}
	StatusCode                    int64
}
