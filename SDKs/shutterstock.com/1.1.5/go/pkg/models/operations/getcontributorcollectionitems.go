package operations

import (
	"openapi/pkg/models/shared"
)

type GetContributorCollectionItemsPathParams struct {
	ContributorID string `pathParam:"style=simple,explode=false,name=contributor_id"`
	ID            string `pathParam:"style=simple,explode=false,name=id"`
}

type GetContributorCollectionItemsSortEnum string

const (
	GetContributorCollectionItemsSortEnumNewest GetContributorCollectionItemsSortEnum = "newest"
	GetContributorCollectionItemsSortEnumOldest GetContributorCollectionItemsSortEnum = "oldest"
)

type GetContributorCollectionItemsQueryParams struct {
	Page    *int64                                 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                 `queryParam:"style=form,explode=true,name=per_page"`
	Sort    *GetContributorCollectionItemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetContributorCollectionItemsSecurity struct {
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
}

type GetContributorCollectionItemsRequest struct {
	PathParams  GetContributorCollectionItemsPathParams
	QueryParams GetContributorCollectionItemsQueryParams
	Security    GetContributorCollectionItemsSecurity
}

type GetContributorCollectionItemsResponse struct {
	CollectionItemDataList *interface{}
	ContentType            string
	StatusCode             int64
}
