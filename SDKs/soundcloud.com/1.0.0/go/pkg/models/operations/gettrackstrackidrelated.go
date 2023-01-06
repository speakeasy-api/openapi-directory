package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDRelatedPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDRelatedQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit              *int64              `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
	Offset             *int64              `queryParam:"style=form,explode=true,name=offset"`
}

type GetTracksTrackIDRelatedSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksTrackIDRelatedRequest struct {
	PathParams  GetTracksTrackIDRelatedPathParams
	QueryParams GetTracksTrackIDRelatedQueryParams
	Security    GetTracksTrackIDRelatedSecurity
}

type GetTracksTrackIDRelatedResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	GetTracksTrackIDRelated200ApplicationJSONOneOf *interface{}
}
