// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

type GistsListPublicRequest struct {
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	Since *time.Time `queryParam:"style=form,explode=true,name=since"`
}

type GistsListPublicResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	BaseGists []shared.BaseGist
	// Forbidden
	BasicError *shared.BasicError
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
