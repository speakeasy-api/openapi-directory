// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListDocumentPermissionServerList = []string{
	"https://sync.twilio.com",
}

type ListDocumentPermissionSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListDocumentPermissionRequest struct {
	// The SID of the Sync Document with the Document Permission resources to read. Can be the Document resource's `sid` or its `unique_name`.
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
	// The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resources to read.
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListDocumentPermissionListDocumentPermissionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

// ListDocumentPermissionListDocumentPermissionResponse - OK
type ListDocumentPermissionListDocumentPermissionResponse struct {
	Meta        *ListDocumentPermissionListDocumentPermissionResponseMeta `json:"meta,omitempty"`
	Permissions []shared.SyncV1ServiceDocumentDocumentPermission          `json:"permissions,omitempty"`
}

type ListDocumentPermissionResponse struct {
	ContentType string
	// OK
	ListDocumentPermissionResponse *ListDocumentPermissionListDocumentPermissionResponse
	StatusCode                     int
	RawResponse                    *http.Response
}
