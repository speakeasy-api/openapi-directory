// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DrivePermissionsGetIDForEmailSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption3 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption4 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption5 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption6 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption7 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurityOption8 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DrivePermissionsGetIDForEmailSecurity struct {
	Option1 *DrivePermissionsGetIDForEmailSecurityOption1 `security:"option"`
	Option2 *DrivePermissionsGetIDForEmailSecurityOption2 `security:"option"`
	Option3 *DrivePermissionsGetIDForEmailSecurityOption3 `security:"option"`
	Option4 *DrivePermissionsGetIDForEmailSecurityOption4 `security:"option"`
	Option5 *DrivePermissionsGetIDForEmailSecurityOption5 `security:"option"`
	Option6 *DrivePermissionsGetIDForEmailSecurityOption6 `security:"option"`
	Option7 *DrivePermissionsGetIDForEmailSecurityOption7 `security:"option"`
	Option8 *DrivePermissionsGetIDForEmailSecurityOption8 `security:"option"`
}

type DrivePermissionsGetIDForEmailRequest struct {
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// The email address for which to return a permission ID
	Email string `pathParam:"style=simple,explode=false,name=email"`
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

type DrivePermissionsGetIDForEmailResponse struct {
	ContentType string
	// Successful response
	PermissionID *shared.PermissionID
	StatusCode   int
	RawResponse  *http.Response
}
