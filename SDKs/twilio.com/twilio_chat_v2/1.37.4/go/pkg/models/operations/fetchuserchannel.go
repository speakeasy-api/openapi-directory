package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUserChannelServerList = []string{
	"https://chat.twilio.com",
}

type FetchUserChannelPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type FetchUserChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUserChannelRequest struct {
	ServerURL  *string
	PathParams FetchUserChannelPathParams
	Security   FetchUserChannelSecurity
}

type FetchUserChannelResponse struct {
	ContentType                  string
	StatusCode                   int64
	ChatV2ServiceUserUserChannel *shared.ChatV2ServiceUserUserChannel
}
