package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSimServerList = []string{
	"https://supersim.twilio.com",
}

type FetchSimPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSimRequest struct {
	ServerURL  *string
	PathParams FetchSimPathParams
	Security   FetchSimSecurity
}

type FetchSimResponse struct {
	ContentType   string
	StatusCode    int64
	SupersimV1Sim *shared.SupersimV1Sim
}
