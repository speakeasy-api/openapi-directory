package operations

import (
	"openapi/pkg/models/shared"
)

var ListUserServers = []string{
	"https://conversations.twilio.com",
}

type ListUserQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUserRequest struct {
	ServerURL   *string
	QueryParams ListUserQueryParams
	Security    ListUserSecurity
}

type ListUserListUserResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUserListUserResponse struct {
	Meta  *ListUserListUserResponseMeta `json:"meta,omitempty"`
	Users []shared.ConversationsV1User  `json:"users,omitempty"`
}

type ListUserResponse struct {
	ContentType      string
	ListUserResponse *ListUserListUserResponse
	StatusCode       int64
}
