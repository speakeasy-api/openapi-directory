// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var CreateInviteServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateInvitePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateInviteCreateInviteRequest struct {
	Identity string  `form:"name=Identity"`
	RoleSid  *string `form:"name=RoleSid"`
}

type CreateInviteRequest struct {
	PathParams CreateInvitePathParams
	Request    *CreateInviteCreateInviteRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateInviteSecurity
	ServerURL  *string
}

type CreateInviteResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	IPMessagingV2ServiceChannelInvite *shared.IPMessagingV2ServiceChannelInvite
}
