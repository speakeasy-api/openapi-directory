// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest struct {
	// V1 error format.
	DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
	Names []string `queryParam:"style=form,explode=true,name=names"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse struct {
	ContentType string
	// Successful response
	GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse *shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
	StatusCode                                                         int
	RawResponse                                                        *http.Response
}
