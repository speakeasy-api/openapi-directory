// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var UpdateSyncDocumentServerList = []string{
	"https://preview.twilio.com",
}

type UpdateSyncDocumentSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type UpdateSyncDocumentUpdateSyncDocumentRequest struct {
	Data interface{} `form:"name=Data"`
}

type UpdateSyncDocumentRequest struct {
	// The If-Match HTTP request header
	IfMatch     *string                                      `header:"style=simple,explode=false,name=If-Match"`
	RequestBody *UpdateSyncDocumentUpdateSyncDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	ServiceSid  string                                       `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid         string                                       `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSyncDocumentResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	PreviewSyncServiceDocument *shared.PreviewSyncServiceDocument
}
