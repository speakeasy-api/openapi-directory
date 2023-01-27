package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWebChannelServerList = []string{
	"https://flex-api.twilio.com",
}

type CreateWebChannelCreateWebChannelRequest struct {
	AddressSid           string  `form:"name=AddressSid"`
	ChatFriendlyName     *string `form:"name=ChatFriendlyName"`
	CustomerFriendlyName *string `form:"name=CustomerFriendlyName"`
	PreEngagementData    *string `form:"name=PreEngagementData"`
}

type CreateWebChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateWebChannelRequest struct {
	ServerURL *string
	Request   *CreateWebChannelCreateWebChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateWebChannelSecurity
}

type CreateWebChannelResponse struct {
	ContentType      string
	StatusCode       int64
	FlexV2WebChannel *shared.FlexV2WebChannel
}
