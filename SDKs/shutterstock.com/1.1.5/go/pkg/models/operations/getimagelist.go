package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageListViewEnum string

const (
	GetImageListViewEnumMinimal GetImageListViewEnum = "minimal"
	GetImageListViewEnumFull    GetImageListViewEnum = "full"
)

type GetImageListQueryParams struct {
	ID   []string              `queryParam:"style=form,explode=true,name=id"`
	View *GetImageListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetImageListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageListRequest struct {
	QueryParams GetImageListQueryParams
	Security    GetImageListSecurity
}

type GetImageListResponse struct {
	ContentType   string
	ImageDataList *interface{}
	StatusCode    int64
}
