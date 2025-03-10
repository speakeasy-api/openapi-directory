package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipIPAccessControlListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type ListSipIPAccessControlListMappingQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipIPAccessControlListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipIPAccessControlListMappingRequest struct {
	ServerURL   *string
	PathParams  ListSipIPAccessControlListMappingPathParams
	QueryParams ListSipIPAccessControlListMappingQueryParams
	Security    ListSipIPAccessControlListMappingSecurity
}

type ListSipIPAccessControlListMappingListSipIPAccessControlListMappingResponse struct {
	End                         *int64                                                            `json:"end,omitempty"`
	FirstPageURI                *string                                                           `json:"first_page_uri,omitempty"`
	IPAccessControlListMappings []shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping `json:"ip_access_control_list_mappings,omitempty"`
	NextPageURI                 *string                                                           `json:"next_page_uri,omitempty"`
	Page                        *int64                                                            `json:"page,omitempty"`
	PageSize                    *int64                                                            `json:"page_size,omitempty"`
	PreviousPageURI             *string                                                           `json:"previous_page_uri,omitempty"`
	Start                       *int64                                                            `json:"start,omitempty"`
	URI                         *string                                                           `json:"uri,omitempty"`
}

type ListSipIPAccessControlListMappingResponse struct {
	ContentType                               string
	ListSipIPAccessControlListMappingResponse *ListSipIPAccessControlListMappingListSipIPAccessControlListMappingResponse
	StatusCode                                int64
}
