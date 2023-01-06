package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveAllSupportedAspspSInAGivenCountryQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
}

type RetrieveAllSupportedAspspSInAGivenCountryRequest struct {
	QueryParams RetrieveAllSupportedAspspSInAGivenCountryQueryParams
}

type RetrieveAllSupportedAspspSInAGivenCountryResponse struct {
	Aspsps      []shared.Aspsp
	ContentType string
	StatusCode  int64
}
