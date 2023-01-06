package operations

import (
	"openapi/pkg/models/shared"
)

type ListBatchErrorsPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type ListBatchErrorsQueryParams struct {
	Page     *int32 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int32 `queryParam:"style=form,explode=true,name=pagesize"`
}

type ListBatchErrorsRequest struct {
	PathParams  ListBatchErrorsPathParams
	QueryParams ListBatchErrorsQueryParams
}

type ListBatchErrorsResponse struct {
	ContentType                 string
	StatusCode                  int64
	ErrorResponseBody           *shared.ErrorResponseBody
	ListBatchErrorsResponseBody *shared.ListBatchErrorsResponseBody
}
