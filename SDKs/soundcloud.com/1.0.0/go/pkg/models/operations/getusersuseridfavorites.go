package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDFavoritesPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDFavoritesQueryParams struct {
	Limit              *int64 `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool  `queryParam:"style=form,explode=true,name=linked_partitioning"`
}

type GetUsersUserIDFavoritesSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDFavoritesRequest struct {
	PathParams  GetUsersUserIDFavoritesPathParams
	QueryParams GetUsersUserIDFavoritesQueryParams
	Security    GetUsersUserIDFavoritesSecurity
}

type GetUsersUserIDFavoritesResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	GetUsersUserIDFavorites200ApplicationJSONOneOf *interface{}
}
