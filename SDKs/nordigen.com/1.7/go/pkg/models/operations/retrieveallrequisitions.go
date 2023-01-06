package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveAllRequisitionsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type RetrieveAllRequisitionsRequest struct {
	QueryParams RetrieveAllRequisitionsQueryParams
}

type RetrieveAllRequisitionsResponse struct {
	ContentType              string
	PaginatedRequisitionList *shared.PaginatedRequisitionList
	StatusCode               int64
}
