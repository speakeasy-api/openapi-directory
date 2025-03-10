// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListBundleCopyServerList = []string{
	"https://numbers.twilio.com",
}

type ListBundleCopySecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListBundleCopyRequest struct {
	// The unique string that we created to identify the Bundle resource.
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListBundleCopyListBundleCopyResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

// ListBundleCopyListBundleCopyResponse - OK
type ListBundleCopyListBundleCopyResponse struct {
	Meta    *ListBundleCopyListBundleCopyResponseMeta              `json:"meta,omitempty"`
	Results []shared.NumbersV2RegulatoryComplianceBundleBundleCopy `json:"results,omitempty"`
}

type ListBundleCopyResponse struct {
	ContentType string
	// OK
	ListBundleCopyResponse *ListBundleCopyListBundleCopyResponse
	StatusCode             int
	RawResponse            *http.Response
}
