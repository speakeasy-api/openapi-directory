package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariantSetsCollectionQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVariantSetsCollectionRequest struct {
	QueryParams GetVariantSetsCollectionQueryParams
}

type GetVariantSetsCollectionResponse struct {
	ContentType       string
	PageOfVariantSets *shared.PageOfVariantSets
	StatusCode        int64
}
