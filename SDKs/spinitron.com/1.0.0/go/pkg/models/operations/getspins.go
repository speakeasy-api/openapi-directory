package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSpinsQueryParams struct {
	Count      *int64     `queryParam:"style=form,explode=true,name=count"`
	End        *time.Time `queryParam:"style=form,explode=true,name=end"`
	Expand     []string   `queryParam:"style=form,explode=true,name=expand"`
	Fields     []string   `queryParam:"style=form,explode=true,name=fields"`
	Page       *int64     `queryParam:"style=form,explode=true,name=page"`
	PlaylistID *int64     `queryParam:"style=form,explode=true,name=playlist_id"`
	ShowID     *int64     `queryParam:"style=form,explode=true,name=show_id"`
	Start      *time.Time `queryParam:"style=form,explode=true,name=start"`
}

type GetSpins200ApplicationJSON struct {
	Items []shared.Spin `json:"items,omitempty"`
}

type GetSpinsRequest struct {
	QueryParams GetSpinsQueryParams
}

type GetSpinsResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	GetSpins200ApplicationJSONObject *GetSpins200ApplicationJSON
}
