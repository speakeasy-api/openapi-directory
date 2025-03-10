// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var FetchSyncDocumentPermissionServerList = []string{
	"https://preview.twilio.com",
}

type FetchSyncDocumentPermissionSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type FetchSyncDocumentPermissionRequest struct {
	// Identifier of the Sync Document. Either a SID or a unique name.
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	// Arbitrary string identifier representing a user associated with an FPA token, assigned by the developer.
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncDocumentPermissionResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	PreviewSyncServiceDocumentDocumentPermission *shared.PreviewSyncServiceDocumentDocumentPermission
}
