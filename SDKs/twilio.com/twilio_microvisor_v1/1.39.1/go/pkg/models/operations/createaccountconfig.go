// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var CreateAccountConfigServerList = []string{
	"https://microvisor.twilio.com",
}

type CreateAccountConfigSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAccountConfigCreateAccountConfigRequest struct {
	// The config key; up to 100 characters.
	Key string `form:"name=Key"`
	// The config value; up to 4096 characters.
	Value string `form:"name=Value"`
}

type CreateAccountConfigRequest struct {
	Request   *CreateAccountConfigCreateAccountConfigRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateAccountConfigSecurity
	ServerURL *string
}

type CreateAccountConfigResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	MicrovisorV1AccountConfig *shared.MicrovisorV1AccountConfig
}
