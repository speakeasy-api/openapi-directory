package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackCollectionListEmbedEnum string

const (
	GetTrackCollectionListEmbedEnumShareCode GetTrackCollectionListEmbedEnum = "share_code"
	GetTrackCollectionListEmbedEnumShareURL  GetTrackCollectionListEmbedEnum = "share_url"
)

type GetTrackCollectionListQueryParams struct {
	Embed   []GetTrackCollectionListEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
	Page    *int64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                            `queryParam:"style=form,explode=true,name=per_page"`
}

type GetTrackCollectionListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetTrackCollectionListRequest struct {
	QueryParams GetTrackCollectionListQueryParams
	Security    GetTrackCollectionListSecurity
}

type GetTrackCollectionListResponse struct {
	CollectionDataList *interface{}
	ContentType        string
	StatusCode         int64
}
