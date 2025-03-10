package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialServerList = []string{
	"https://ip-messaging.twilio.com",
}

type ListCredentialQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCredentialListCredentialResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCredentialListCredentialResponse struct {
	Credentials []shared.IPMessagingV1Credential          `json:"credentials,omitempty"`
	Meta        *ListCredentialListCredentialResponseMeta `json:"meta,omitempty"`
}

type ListCredentialRequest struct {
	ServerURL   *string
	QueryParams ListCredentialQueryParams
	Security    ListCredentialSecurity
}

type ListCredentialResponse struct {
	ContentType            string
	ListCredentialResponse *ListCredentialListCredentialResponse
	StatusCode             int64
}
