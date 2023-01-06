package operations

import (
	"openapi/pkg/models/shared"
)

type PutVariantSetItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutVariantSetItemRequest struct {
	PathParams PutVariantSetItemPathParams
	Request    shared.VariantSet `request:"mediaType=application/json"`
}

type PutVariantSetItemResponse struct {
	ContentType string
	StatusCode  int64
}
