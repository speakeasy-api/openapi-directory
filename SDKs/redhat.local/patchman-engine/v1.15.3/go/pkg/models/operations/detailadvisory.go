// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DetailAdvisorySecurity struct {
	RhIdentity string `security:"scheme,type=apiKey,subtype=header,name=x-rh-identity"`
}

type DetailAdvisoryRequest struct {
	// Advisory ID
	AdvisoryID string `pathParam:"style=simple,explode=false,name=advisory_id"`
}

type DetailAdvisoryResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	ControllersAdvisoryDetailResponse *shared.ControllersAdvisoryDetailResponse
}
