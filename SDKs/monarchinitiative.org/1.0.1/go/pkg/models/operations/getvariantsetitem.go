package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariantSetItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVariantSetItemRequest struct {
	PathParams GetVariantSetItemPathParams
}

type GetVariantSetItemResponse struct {
	ContentType string
	StatusCode  int64
	VariantSet  *shared.VariantSet
}
