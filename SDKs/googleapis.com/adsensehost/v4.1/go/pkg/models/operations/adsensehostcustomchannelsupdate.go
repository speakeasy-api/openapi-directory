// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AdsensehostCustomchannelsUpdateSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type AdsensehostCustomchannelsUpdateRequest struct {
	CustomChannel *shared.CustomChannel `request:"mediaType=application/json"`
	// Ad client in which the custom channel will be updated.
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Deprecated. Please use quotaUser instead.
	UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostCustomchannelsUpdateResponse struct {
	ContentType string
	// Successful response
	CustomChannel *shared.CustomChannel
	StatusCode    int
	RawResponse   *http.Response
}
