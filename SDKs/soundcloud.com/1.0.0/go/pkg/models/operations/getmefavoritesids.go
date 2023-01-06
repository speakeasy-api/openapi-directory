package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeFavoritesIdsQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetMeFavoritesIdsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeFavoritesIdsRequest struct {
	QueryParams GetMeFavoritesIdsQueryParams
	Security    GetMeFavoritesIdsSecurity
}

type GetMeFavoritesIdsResponse struct {
	ContentType string
	StatusCode  int64
}
