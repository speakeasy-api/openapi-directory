package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDCommentsPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDCommentsQueryParams struct {
	Limit              *int64 `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool  `queryParam:"style=form,explode=true,name=linked_partitioning"`
	Offset             *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetTracksTrackIDCommentsSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksTrackIDCommentsRequest struct {
	PathParams  GetTracksTrackIDCommentsPathParams
	QueryParams GetTracksTrackIDCommentsQueryParams
	Security    GetTracksTrackIDCommentsSecurity
}

type GetTracksTrackIDCommentsResponse struct {
	ContentType                                     string
	Error                                           *shared.Error
	StatusCode                                      int64
	GetTracksTrackIDComments200ApplicationJSONOneOf *interface{}
}
