// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListSyncSyncListPermissionServerList = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncListPermissionSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListSyncSyncListPermissionRequest struct {
	// Identifier of the Sync List. Either a SID or a unique name.
	ListSid string `pathParam:"style=simple,explode=false,name=ListSid"`
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken  *string `queryParam:"style=form,explode=true,name=PageToken"`
	ServiceSid string  `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

// ListSyncSyncListPermissionListSyncSyncListPermissionResponse - OK
type ListSyncSyncListPermissionListSyncSyncListPermissionResponse struct {
	Meta        *ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta `json:"meta,omitempty"`
	Permissions []shared.PreviewSyncServiceSyncListSyncListPermission             `json:"permissions,omitempty"`
}

type ListSyncSyncListPermissionResponse struct {
	ContentType string
	// OK
	ListSyncSyncListPermissionResponse *ListSyncSyncListPermissionListSyncSyncListPermissionResponse
	StatusCode                         int
	RawResponse                        *http.Response
}
