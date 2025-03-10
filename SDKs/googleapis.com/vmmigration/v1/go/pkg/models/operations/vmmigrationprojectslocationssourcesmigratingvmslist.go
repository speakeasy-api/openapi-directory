// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

// VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum - Optional. The level of details of each migrating VM.
type VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum string

const (
	VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnumMigratingVMViewUnspecified VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum = "MIGRATING_VM_VIEW_UNSPECIFIED"
	VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnumMigratingVMViewBasic       VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum = "MIGRATING_VM_VIEW_BASIC"
	VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnumMigratingVMViewFull        VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum = "MIGRATING_VM_VIEW_FULL"
)

func (e VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum) ToPointer() *VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum {
	return &e
}

func (e *VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "MIGRATING_VM_VIEW_UNSPECIFIED":
		fallthrough
	case "MIGRATING_VM_VIEW_BASIC":
		fallthrough
	case "MIGRATING_VM_VIEW_FULL":
		*e = VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum: %v", v)
	}
}

type VmmigrationProjectsLocationsSourcesMigratingVmsListRequest struct {
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
	// Optional. The filter request.
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Optional. the order by fields for the result.
	OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
	// Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
	// Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Required. The parent, which owns this collection of MigratingVms.
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
	// Optional. The level of details of each migrating VM.
	View *VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type VmmigrationProjectsLocationsSourcesMigratingVmsListResponse struct {
	ContentType string
	// Successful response
	ListMigratingVmsResponse *shared.ListMigratingVmsResponse
	StatusCode               int
	RawResponse              *http.Response
}
