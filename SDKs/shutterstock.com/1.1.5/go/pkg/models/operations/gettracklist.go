package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackListViewEnum string

const (
	GetTrackListViewEnumMinimal GetTrackListViewEnum = "minimal"
	GetTrackListViewEnumFull    GetTrackListViewEnum = "full"
)

type GetTrackListQueryParams struct {
	ID   []string              `queryParam:"style=form,explode=true,name=id"`
	View *GetTrackListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetTrackListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetTrackListRequest struct {
	QueryParams GetTrackListQueryParams
	Security    GetTrackListSecurity
}

type GetTrackListResponse struct {
	AudioDataList *interface{}
	ContentType   string
	StatusCode    int64
}
