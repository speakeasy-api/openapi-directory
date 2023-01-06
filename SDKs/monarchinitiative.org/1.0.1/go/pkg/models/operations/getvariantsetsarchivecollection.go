package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariantSetsArchiveCollectionPathParams struct {
	Day   int64 `pathParam:"style=simple,explode=false,name=day"`
	Month int64 `pathParam:"style=simple,explode=false,name=month"`
	Year  int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetVariantSetsArchiveCollectionQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVariantSetsArchiveCollectionRequest struct {
	PathParams  GetVariantSetsArchiveCollectionPathParams
	QueryParams GetVariantSetsArchiveCollectionQueryParams
}

type GetVariantSetsArchiveCollectionResponse struct {
	ContentType       string
	PageOfVariantSets *shared.PageOfVariantSets
	StatusCode        int64
}
