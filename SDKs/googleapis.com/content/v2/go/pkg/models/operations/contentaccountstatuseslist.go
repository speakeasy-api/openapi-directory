// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ContentAccountstatusesListSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type ContentAccountstatusesListRequest struct {
	// V1 error format.
	DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
	Destinations []string `queryParam:"style=form,explode=true,name=destinations"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// The maximum number of account statuses to return in the response, used for paging.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// The ID of the managing account. This must be a multi-client account.
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// The token returned by the previous request.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentAccountstatusesListResponse struct {
	// Successful response
	AccountstatusesListResponse *shared.AccountstatusesListResponse
	ContentType                 string
	StatusCode                  int
	RawResponse                 *http.Response
}
