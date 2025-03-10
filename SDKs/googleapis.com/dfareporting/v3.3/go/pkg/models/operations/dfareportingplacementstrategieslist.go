// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type DfareportingPlacementStrategiesListSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

// DfareportingPlacementStrategiesListSortFieldEnum - Field by which to sort the list.
type DfareportingPlacementStrategiesListSortFieldEnum string

const (
	DfareportingPlacementStrategiesListSortFieldEnumID   DfareportingPlacementStrategiesListSortFieldEnum = "ID"
	DfareportingPlacementStrategiesListSortFieldEnumName DfareportingPlacementStrategiesListSortFieldEnum = "NAME"
)

func (e DfareportingPlacementStrategiesListSortFieldEnum) ToPointer() *DfareportingPlacementStrategiesListSortFieldEnum {
	return &e
}

func (e *DfareportingPlacementStrategiesListSortFieldEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ID":
		fallthrough
	case "NAME":
		*e = DfareportingPlacementStrategiesListSortFieldEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DfareportingPlacementStrategiesListSortFieldEnum: %v", v)
	}
}

// DfareportingPlacementStrategiesListSortOrderEnum - Order of sorted results.
type DfareportingPlacementStrategiesListSortOrderEnum string

const (
	DfareportingPlacementStrategiesListSortOrderEnumAscending  DfareportingPlacementStrategiesListSortOrderEnum = "ASCENDING"
	DfareportingPlacementStrategiesListSortOrderEnumDescending DfareportingPlacementStrategiesListSortOrderEnum = "DESCENDING"
)

func (e DfareportingPlacementStrategiesListSortOrderEnum) ToPointer() *DfareportingPlacementStrategiesListSortOrderEnum {
	return &e
}

func (e *DfareportingPlacementStrategiesListSortOrderEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ASCENDING":
		fallthrough
	case "DESCENDING":
		*e = DfareportingPlacementStrategiesListSortOrderEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DfareportingPlacementStrategiesListSortOrderEnum: %v", v)
	}
}

type DfareportingPlacementStrategiesListRequest struct {
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
	// Select only placement strategies with these IDs.
	Ids []string `queryParam:"style=form,explode=true,name=ids"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// Maximum number of results to return.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Value of the nextPageToken from the previous result page.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// User profile ID associated with this request.
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
	SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
	// Field by which to sort the list.
	SortField *DfareportingPlacementStrategiesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	// Order of sorted results.
	SortOrder *DfareportingPlacementStrategiesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingPlacementStrategiesListResponse struct {
	ContentType string
	// Successful response
	PlacementStrategiesListResponse *shared.PlacementStrategiesListResponse
	StatusCode                      int
	RawResponse                     *http.Response
}
