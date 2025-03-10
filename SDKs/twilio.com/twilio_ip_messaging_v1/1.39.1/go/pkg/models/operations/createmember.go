// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var CreateMemberServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateMemberCreateMemberRequest struct {
	Identity string  `form:"name=Identity"`
	RoleSid  *string `form:"name=RoleSid"`
}

type CreateMemberRequest struct {
	PathParams CreateMemberPathParams
	Request    *CreateMemberCreateMemberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMemberSecurity
	ServerURL  *string
}

type CreateMemberResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	IPMessagingV1ServiceChannelMember *shared.IPMessagingV1ServiceChannelMember
}
