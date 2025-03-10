// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetEditorialImageLivefeedItemsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialImageLivefeedItemsPathParams struct {
	// Editorial livefeed ID; must be an URI encoded string
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialImageLivefeedItemsQueryParams struct {
	// Returns only if the livefeed items are available for distribution in a certain country
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type GetEditorialImageLivefeedItemsRequest struct {
	PathParams  GetEditorialImageLivefeedItemsPathParams
	QueryParams GetEditorialImageLivefeedItemsQueryParams
	Security    GetEditorialImageLivefeedItemsSecurity
}

type GetEditorialImageLivefeedItemsResponse struct {
	ContentType string
	// OK
	EditorialImageContentDataList *shared.EditorialImageContentDataList
	StatusCode                    int
	RawResponse                   *http.Response
}
