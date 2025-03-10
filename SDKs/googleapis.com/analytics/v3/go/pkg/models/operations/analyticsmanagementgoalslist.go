// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AnalyticsManagementGoalsListSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type AnalyticsManagementGoalsListSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type AnalyticsManagementGoalsListSecurityOption3 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type AnalyticsManagementGoalsListSecurity struct {
	Option1 *AnalyticsManagementGoalsListSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementGoalsListSecurityOption2 `security:"option"`
	Option3 *AnalyticsManagementGoalsListSecurityOption3 `security:"option"`
}

type AnalyticsManagementGoalsListRequest struct {
	// Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// The maximum number of goals to include in this response.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=max-results"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
	// An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
	StartIndex *int64 `queryParam:"style=form,explode=true,name=start-index"`
	// Deprecated. Please use quotaUser instead.
	UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
	// Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementGoalsListResponse struct {
	ContentType string
	// Successful response
	Goals       *shared.Goals
	StatusCode  int
	RawResponse *http.Response
}
