// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type StorageDefaultObjectAccessControlsDeleteSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type StorageDefaultObjectAccessControlsDeleteSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type StorageDefaultObjectAccessControlsDeleteSecurity struct {
	Option1 *StorageDefaultObjectAccessControlsDeleteSecurityOption1 `security:"option"`
	Option2 *StorageDefaultObjectAccessControlsDeleteSecurityOption2 `security:"option"`
}

type StorageDefaultObjectAccessControlsDeleteRequest struct {
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Name of a bucket.
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	// The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
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
	// Upload protocol for media (e.g. "media", "multipart", "resumable").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Deprecated. Please use quotaUser instead.
	UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
	// The project to be billed for this request. Required for Requester Pays buckets.
	UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageDefaultObjectAccessControlsDeleteResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
