// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type VaultMattersHoldsGetSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type VaultMattersHoldsGetSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type VaultMattersHoldsGetSecurity struct {
	Option1 *VaultMattersHoldsGetSecurityOption1 `security:"option"`
	Option2 *VaultMattersHoldsGetSecurityOption2 `security:"option"`
}

// VaultMattersHoldsGetViewEnum - The amount of detail to return for a hold.
type VaultMattersHoldsGetViewEnum string

const (
	VaultMattersHoldsGetViewEnumHoldViewUnspecified VaultMattersHoldsGetViewEnum = "HOLD_VIEW_UNSPECIFIED"
	VaultMattersHoldsGetViewEnumBasicHold           VaultMattersHoldsGetViewEnum = "BASIC_HOLD"
	VaultMattersHoldsGetViewEnumFullHold            VaultMattersHoldsGetViewEnum = "FULL_HOLD"
)

func (e VaultMattersHoldsGetViewEnum) ToPointer() *VaultMattersHoldsGetViewEnum {
	return &e
}

func (e *VaultMattersHoldsGetViewEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "HOLD_VIEW_UNSPECIFIED":
		fallthrough
	case "BASIC_HOLD":
		fallthrough
	case "FULL_HOLD":
		*e = VaultMattersHoldsGetViewEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VaultMattersHoldsGetViewEnum: %v", v)
	}
}

type VaultMattersHoldsGetRequest struct {
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
	// The hold ID.
	HoldID string `pathParam:"style=simple,explode=false,name=holdId"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// The matter ID.
	MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
	// The amount of detail to return for a hold.
	View *VaultMattersHoldsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type VaultMattersHoldsGetResponse struct {
	ContentType string
	// Successful response
	Hold        *shared.Hold
	StatusCode  int
	RawResponse *http.Response
}
