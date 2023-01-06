package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoListViewEnum string

const (
	GetVideoListViewEnumMinimal GetVideoListViewEnum = "minimal"
	GetVideoListViewEnumFull    GetVideoListViewEnum = "full"
)

type GetVideoListQueryParams struct {
	ID   []string              `queryParam:"style=form,explode=true,name=id"`
	View *GetVideoListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetVideoListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetVideoListRequest struct {
	QueryParams GetVideoListQueryParams
	Security    GetVideoListSecurity
}

type GetVideoListResponse struct {
	ContentType   string
	StatusCode    int64
	VideoDataList *interface{}
}
