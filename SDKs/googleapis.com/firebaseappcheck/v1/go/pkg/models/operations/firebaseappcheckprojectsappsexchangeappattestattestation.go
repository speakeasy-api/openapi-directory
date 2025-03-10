// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest struct {
	// V1 error format.
	DollarXgafv                                                 *shared.XgafvEnum                                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest *shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest `request:"mediaType=application/json"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
	App string `pathParam:"style=simple,explode=false,name=app"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse struct {
	ContentType string
	// Successful response
	GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse *shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
	StatusCode                                                   int
	RawResponse                                                  *http.Response
}
