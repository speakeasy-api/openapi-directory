package operations

import (
	"openapi/pkg/models/shared"
)

var CreateInviteServers = []string{
	"https://chat.twilio.com",
}

type CreateInvitePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateInviteRequestBodyCreateInviteRequest struct {
	Identity string  `form:"name=Identity"`
	RoleSid  *string `form:"name=RoleSid"`
}

type CreateInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateInviteRequest struct {
	ServerURL  *string
	PathParams CreateInvitePathParams
	Request    *CreateInviteRequestBodyCreateInviteRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateInviteSecurity
}

type CreateInviteResponse struct {
	ContentType                string
	StatusCode                 int64
	ChatV1ServiceChannelInvite *shared.ChatV1ServiceChannelInvite
}
