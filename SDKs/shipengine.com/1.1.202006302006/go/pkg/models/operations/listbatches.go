package operations

import (
	"openapi/pkg/models/shared"
)

type ListBatchesQueryParams struct {
	Page     *int32                    `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32                    `queryParam:"style=form,explode=true,name=page_size"`
	SortBy   *shared.BatchesSortByEnum `queryParam:"style=form,explode=true,name=sort_by"`
	SortDir  map[string]interface{}    `queryParam:"style=form,explode=true,name=sort_dir"`
	Status   *shared.BatchStatusEnum   `queryParam:"style=form,explode=true,name=status"`
}

type ListBatchesRequest struct {
	QueryParams ListBatchesQueryParams
}

type ListBatchesResponse struct {
	ContentType             string
	StatusCode              int64
	ErrorResponseBody       *shared.ErrorResponseBody
	ListBatchesResponseBody *shared.ListBatchesResponseBody
}
