// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDFavoritersSecurity struct {
	ClientID string `security:"scheme,type=apiKey,subtype=query,name=client_id"`
}

type GetTracksTrackIDFavoritersRequest struct {
	// Number of results to return in the collection.
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// Offset of first result. Deprecated, use `linked_partitioning` instead.
	//
	// Deprecated: this field will be removed in a future release, please migrate away from it as soon as possible.
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
	// SoundCloud Track id
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDFavoritersResponse struct {
	ContentType string
	// Unauthorized
	Error       *shared.Error
	StatusCode  int
	RawResponse *http.Response
	// Success
	UsersList []shared.UsersList
}
