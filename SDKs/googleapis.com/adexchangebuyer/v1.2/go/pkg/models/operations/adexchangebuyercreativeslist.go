// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type AdexchangebuyerCreativesListSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

// AdexchangebuyerCreativesListStatusFilterEnum - When specified, only creatives having the given status are returned.
type AdexchangebuyerCreativesListStatusFilterEnum string

const (
	AdexchangebuyerCreativesListStatusFilterEnumApproved    AdexchangebuyerCreativesListStatusFilterEnum = "approved"
	AdexchangebuyerCreativesListStatusFilterEnumDisapproved AdexchangebuyerCreativesListStatusFilterEnum = "disapproved"
	AdexchangebuyerCreativesListStatusFilterEnumNotChecked  AdexchangebuyerCreativesListStatusFilterEnum = "not_checked"
)

func (e AdexchangebuyerCreativesListStatusFilterEnum) ToPointer() *AdexchangebuyerCreativesListStatusFilterEnum {
	return &e
}

func (e *AdexchangebuyerCreativesListStatusFilterEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "approved":
		fallthrough
	case "disapproved":
		fallthrough
	case "not_checked":
		*e = AdexchangebuyerCreativesListStatusFilterEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AdexchangebuyerCreativesListStatusFilterEnum: %v", v)
	}
}

type AdexchangebuyerCreativesListRequest struct {
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// When specified, only creatives having the given status are returned.
	StatusFilter *AdexchangebuyerCreativesListStatusFilterEnum `queryParam:"style=form,explode=true,name=statusFilter"`
	// Deprecated. Please use quotaUser instead.
	UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerCreativesListResponse struct {
	ContentType string
	// Successful response
	CreativesList *shared.CreativesList
	StatusCode    int
	RawResponse   *http.Response
}
