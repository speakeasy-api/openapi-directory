package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceServerList = []string{
	"https://ip-messaging.twilio.com",
}

type FetchServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceRequest struct {
	ServerURL  *string
	PathParams FetchServicePathParams
	Security   FetchServiceSecurity
}

type FetchServiceResponse struct {
	ContentType          string
	StatusCode           int64
	IPMessagingV1Service *shared.IPMessagingV1Service
}
