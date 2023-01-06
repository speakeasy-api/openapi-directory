package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomersAccountAnnouncementsPathParams struct {
	Account int64 `pathParam:"style=simple,explode=false,name=account"`
}

type GetCustomersAccountAnnouncements200ApplicationJSON struct {
	List []shared.OneannouncementsPostResponses201ContentApplication1jsonSchema `json:"list,omitempty"`
}

type GetCustomersAccountAnnouncementsRequest struct {
	PathParams GetCustomersAccountAnnouncementsPathParams
}

type GetCustomersAccountAnnouncementsResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	GetCustomersAccountAnnouncements200ApplicationJSONObject      *GetCustomersAccountAnnouncements200ApplicationJSON
	OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema
}
