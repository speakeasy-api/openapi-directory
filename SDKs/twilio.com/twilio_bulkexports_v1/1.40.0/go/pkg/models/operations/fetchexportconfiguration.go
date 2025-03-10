// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var FetchExportConfigurationServerList = []string{
	"https://bulkexports.twilio.com",
}

type FetchExportConfigurationSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type FetchExportConfigurationRequest struct {
	// The type of communication – Messages, Calls, Conferences, and Participants
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type FetchExportConfigurationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	BulkexportsV1ExportConfiguration *shared.BulkexportsV1ExportConfiguration
}
