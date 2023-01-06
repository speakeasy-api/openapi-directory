package operations

import (
	"openapi/pkg/models/shared"
)

var FetchApprovalFetchServerList = []string{
	"https://content.twilio.com",
}

type FetchApprovalFetchPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchApprovalFetchSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchApprovalFetchRequest struct {
	ServerURL  *string
	PathParams FetchApprovalFetchPathParams
	Security   FetchApprovalFetchSecurity
}

type FetchApprovalFetchResponse struct {
	ContentType                   string
	StatusCode                    int64
	ContentV1ContentApprovalFetch *shared.ContentV1ContentApprovalFetch
}
