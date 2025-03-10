// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var CreateAccessTokenServerList = []string{
	"https://verify.twilio.com",
}

type CreateAccessTokenSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAccessTokenPathParams struct {
	// The unique SID identifier of the Service.
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateAccessTokenCreateAccessTokenRequest struct {
	// The friendly name of the factor that is going to be created with this access token
	FactorFriendlyName *string                               `form:"name=FactorFriendlyName"`
	FactorType         shared.AccessTokenEnumFactorTypesEnum `form:"name=FactorType"`
	// The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, and generated by your external system, such as your user's UUID, GUID, or SID.
	Identity string `form:"name=Identity"`
	// How long, in seconds, the access token is valid. Can be an integer between 60 and 300. Default is 60.
	TTL *int64 `form:"name=Ttl"`
}

type CreateAccessTokenRequest struct {
	PathParams CreateAccessTokenPathParams
	Request    *CreateAccessTokenCreateAccessTokenRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateAccessTokenSecurity
	ServerURL  *string
}

type CreateAccessTokenResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	VerifyV2ServiceAccessToken *shared.VerifyV2ServiceAccessToken
}
