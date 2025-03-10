package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceRoleServerList = []string{
	"https://conversations.twilio.com",
}

type ListServiceRolePathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type ListServiceRoleQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceRoleListServiceRoleResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceRoleListServiceRoleResponse struct {
	Meta  *ListServiceRoleListServiceRoleResponseMeta `json:"meta,omitempty"`
	Roles []shared.ConversationsV1ServiceServiceRole  `json:"roles,omitempty"`
}

type ListServiceRoleRequest struct {
	ServerURL   *string
	PathParams  ListServiceRolePathParams
	QueryParams ListServiceRoleQueryParams
	Security    ListServiceRoleSecurity
}

type ListServiceRoleResponse struct {
	ContentType             string
	ListServiceRoleResponse *ListServiceRoleListServiceRoleResponse
	StatusCode              int64
}
