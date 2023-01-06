package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageCollectionListEmbedEnum string

const (
	GetImageCollectionListEmbedEnumShareCode GetImageCollectionListEmbedEnum = "share_code"
	GetImageCollectionListEmbedEnumShareURL  GetImageCollectionListEmbedEnum = "share_url"
)

type GetImageCollectionListQueryParams struct {
	Embed   []GetImageCollectionListEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
	Page    *int64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                            `queryParam:"style=form,explode=true,name=per_page"`
}

type GetImageCollectionListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageCollectionListRequest struct {
	QueryParams GetImageCollectionListQueryParams
	Security    GetImageCollectionListSecurity
}

type GetImageCollectionListResponse struct {
	CollectionDataList *interface{}
	ContentType        string
	StatusCode         int64
}
