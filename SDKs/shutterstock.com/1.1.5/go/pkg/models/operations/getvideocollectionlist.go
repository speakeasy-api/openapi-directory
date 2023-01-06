package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoCollectionListEmbedEnum string

const (
	GetVideoCollectionListEmbedEnumShareCode GetVideoCollectionListEmbedEnum = "share_code"
	GetVideoCollectionListEmbedEnumShareURL  GetVideoCollectionListEmbedEnum = "share_url"
)

type GetVideoCollectionListQueryParams struct {
	Embed   []GetVideoCollectionListEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
	Page    *int64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                            `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVideoCollectionListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetVideoCollectionListRequest struct {
	QueryParams GetVideoCollectionListQueryParams
	Security    GetVideoCollectionListSecurity
}

type GetVideoCollectionListResponse struct {
	CollectionDataList *interface{}
	ContentType        string
	StatusCode         int64
}
