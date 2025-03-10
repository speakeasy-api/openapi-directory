// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetAPISpecificationSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type GetAPISpecificationRequest struct {
	// Used to specify further pages (starts at 1)
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// Number of items to include in pagination (up to 100, defaults to 10)
	PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
	// Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
	XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
}

type GetAPISpecificationResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
}
