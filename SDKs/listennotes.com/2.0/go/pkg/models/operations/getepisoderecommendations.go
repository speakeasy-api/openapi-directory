// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetEpisodeRecommendationsRequest struct {
	// Get API Key on listennotes.com/api
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
	// Episode id.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
	SafeMode *shared.SafeModeParamEnum `queryParam:"style=form,explode=true,name=safe_mode"`
}

type GetEpisodeRecommendationsResponse struct {
	ContentType string
	// OK
	GetEpisodeRecommendationsResponse *shared.GetEpisodeRecommendationsResponse
	Headers                           map[string][]string
	StatusCode                        int
	RawResponse                       *http.Response
}
