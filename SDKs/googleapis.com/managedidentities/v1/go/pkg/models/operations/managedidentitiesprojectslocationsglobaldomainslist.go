// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type ManagedidentitiesProjectsLocationsGlobalDomainsListRequest struct {
	// V1 error format.
	DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// Optional. A filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`.
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
	OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
	// Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used. Regardless of the page_size value, the response may include a partial list. Callers should rely on a response's next_page_token to determine if there are additional results to list.
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
	// Optional. The `next_page_token` value returned from a previous ListDomainsRequest request, if any.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ManagedidentitiesProjectsLocationsGlobalDomainsListResponse struct {
	ContentType string
	// Successful response
	ListDomainsResponse *shared.ListDomainsResponse
	StatusCode          int
	RawResponse         *http.Response
}
