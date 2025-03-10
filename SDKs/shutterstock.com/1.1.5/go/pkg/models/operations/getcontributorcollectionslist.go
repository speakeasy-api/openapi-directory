// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type GetContributorCollectionsListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetContributorCollectionsListPathParams struct {
	// Contributor ID
	ContributorID string `pathParam:"style=simple,explode=false,name=contributor_id"`
}

// GetContributorCollectionsListSortEnum - Sort order
type GetContributorCollectionsListSortEnum string

const (
	GetContributorCollectionsListSortEnumNewest      GetContributorCollectionsListSortEnum = "newest"
	GetContributorCollectionsListSortEnumLastUpdated GetContributorCollectionsListSortEnum = "last_updated"
	GetContributorCollectionsListSortEnumItemCount   GetContributorCollectionsListSortEnum = "item_count"
)

func (e *GetContributorCollectionsListSortEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "newest":
		fallthrough
	case "last_updated":
		fallthrough
	case "item_count":
		*e = GetContributorCollectionsListSortEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for GetContributorCollectionsListSortEnum: %s", s)
	}
}

type GetContributorCollectionsListQueryParams struct {
	// Sort order
	Sort *GetContributorCollectionsListSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetContributorCollectionsListRequest struct {
	PathParams  GetContributorCollectionsListPathParams
	QueryParams GetContributorCollectionsListQueryParams
	Security    GetContributorCollectionsListSecurity
}

type GetContributorCollectionsListResponse struct {
	// OK
	CollectionDataList *shared.CollectionDataList
	ContentType        string
	StatusCode         int
	RawResponse        *http.Response
}
