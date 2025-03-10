// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type PlusPeopleListByActivitySecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type PlusPeopleListByActivitySecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type PlusPeopleListByActivitySecurity struct {
	Option1 *PlusPeopleListByActivitySecurityOption1 `security:"option"`
	Option2 *PlusPeopleListByActivitySecurityOption2 `security:"option"`
}

// PlusPeopleListByActivityCollectionEnum - The collection of people to list.
type PlusPeopleListByActivityCollectionEnum string

const (
	PlusPeopleListByActivityCollectionEnumPlusoners PlusPeopleListByActivityCollectionEnum = "plusoners"
	PlusPeopleListByActivityCollectionEnumResharers PlusPeopleListByActivityCollectionEnum = "resharers"
)

func (e PlusPeopleListByActivityCollectionEnum) ToPointer() *PlusPeopleListByActivityCollectionEnum {
	return &e
}

func (e *PlusPeopleListByActivityCollectionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "plusoners":
		fallthrough
	case "resharers":
		*e = PlusPeopleListByActivityCollectionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PlusPeopleListByActivityCollectionEnum: %v", v)
	}
}

type PlusPeopleListByActivityRequest struct {
	// The ID of the activity to get the list of people for.
	ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// The collection of people to list.
	Collection PlusPeopleListByActivityCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Deprecated. Please use quotaUser instead.
	UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
}

type PlusPeopleListByActivityResponse struct {
	ContentType string
	// Successful response
	PeopleFeed  *shared.PeopleFeed
	StatusCode  int
	RawResponse *http.Response
}
