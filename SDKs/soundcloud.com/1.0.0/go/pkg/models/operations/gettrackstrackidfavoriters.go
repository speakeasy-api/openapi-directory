package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDFavoritersPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDFavoritersQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetTracksTrackIDFavoritersSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksTrackIDFavoritersRequest struct {
	PathParams  GetTracksTrackIDFavoritersPathParams
	QueryParams GetTracksTrackIDFavoritersQueryParams
	Security    GetTracksTrackIDFavoritersSecurity
}

type GetTracksTrackIDFavoritersResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	UsersList   []shared.UsersList
}
