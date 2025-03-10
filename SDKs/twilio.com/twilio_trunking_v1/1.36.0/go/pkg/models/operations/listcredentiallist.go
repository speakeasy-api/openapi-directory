package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialListServers = []string{
	"https://trunking.twilio.com",
}

type ListCredentialListPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type ListCredentialListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCredentialListRequest struct {
	ServerURL   *string
	PathParams  ListCredentialListPathParams
	QueryParams ListCredentialListQueryParams
	Security    ListCredentialListSecurity
}

type ListCredentialListListCredentialListResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCredentialListListCredentialListResponse struct {
	CredentialLists []shared.TrunkingV1TrunkCredentialList            `json:"credential_lists,omitempty"`
	Meta            *ListCredentialListListCredentialListResponseMeta `json:"meta,omitempty"`
}

type ListCredentialListResponse struct {
	ContentType                string
	ListCredentialListResponse *ListCredentialListListCredentialListResponse
	StatusCode                 int64
}
