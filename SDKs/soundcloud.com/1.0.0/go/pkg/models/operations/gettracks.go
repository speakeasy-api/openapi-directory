package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Bpm                *shared.Bpm         `queryParam:"style=deepObject,explode=true,name=bpm"`
	CreatedAt          *shared.CreatedAt   `queryParam:"style=deepObject,explode=true,name=created_at"`
	Duration           *shared.Duration    `queryParam:"style=deepObject,explode=true,name=duration"`
	Genres             *string             `queryParam:"style=form,explode=true,name=genres"`
	Ids                *string             `queryParam:"style=form,explode=true,name=ids"`
	Limit              *int64              `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
	Offset             *int64              `queryParam:"style=form,explode=true,name=offset"`
	Q                  string              `queryParam:"style=form,explode=true,name=q"`
	Tags               *string             `queryParam:"style=form,explode=true,name=tags"`
}

type GetTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksRequest struct {
	QueryParams GetTracksQueryParams
	Security    GetTracksSecurity
}

type GetTracksResponse struct {
	ContentType                      string
	Error                            *shared.Error
	StatusCode                       int64
	GetTracks200ApplicationJSONOneOf *interface{}
}
