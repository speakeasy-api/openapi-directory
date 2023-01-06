package operations

import (
	"openapi/pkg/models/shared"
)

type GetContributorCollectionsListPathParams struct {
	ContributorID string `pathParam:"style=simple,explode=false,name=contributor_id"`
}

type GetContributorCollectionsListSortEnum string

const (
	GetContributorCollectionsListSortEnumNewest      GetContributorCollectionsListSortEnum = "newest"
	GetContributorCollectionsListSortEnumLastUpdated GetContributorCollectionsListSortEnum = "last_updated"
	GetContributorCollectionsListSortEnumItemCount   GetContributorCollectionsListSortEnum = "item_count"
)

type GetContributorCollectionsListQueryParams struct {
	Sort *GetContributorCollectionsListSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetContributorCollectionsListSecurity struct {
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
}

type GetContributorCollectionsListRequest struct {
	PathParams  GetContributorCollectionsListPathParams
	QueryParams GetContributorCollectionsListQueryParams
	Security    GetContributorCollectionsListSecurity
}

type GetContributorCollectionsListResponse struct {
	CollectionDataList *interface{}
	ContentType        string
	StatusCode         int64
}
