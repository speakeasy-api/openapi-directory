// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DriveFilesEmptyTrashSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DriveFilesEmptyTrashRequest struct {
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// If set, empties the trash of the provided shared drive.
	DriveID *string `queryParam:"style=form,explode=true,name=driveId"`
	// Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
	EnforceSingleParent *bool `queryParam:"style=form,explode=true,name=enforceSingleParent"`
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

type DriveFilesEmptyTrashResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
