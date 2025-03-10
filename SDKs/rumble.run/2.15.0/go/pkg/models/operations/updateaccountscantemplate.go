// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateAccountScanTemplateSecurity struct {
	BearerAuth string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

type UpdateAccountScanTemplateResponse struct {
	ContentType string
	// scan template
	ScanTemplate *shared.ScanTemplate
	StatusCode   int
	RawResponse  *http.Response
}
