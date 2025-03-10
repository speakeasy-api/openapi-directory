package operations

import (
	"openapi/pkg/models/shared"
)

var ListWorkspaceServerList = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkspaceQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListWorkspaceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWorkspaceListWorkspaceResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWorkspaceListWorkspaceResponse struct {
	Meta       *ListWorkspaceListWorkspaceResponseMeta `json:"meta,omitempty"`
	Workspaces []shared.TaskrouterV1Workspace          `json:"workspaces,omitempty"`
}

type ListWorkspaceRequest struct {
	ServerURL   *string
	QueryParams ListWorkspaceQueryParams
	Security    ListWorkspaceSecurity
}

type ListWorkspaceResponse struct {
	ContentType           string
	ListWorkspaceResponse *ListWorkspaceListWorkspaceResponse
	StatusCode            int64
}
