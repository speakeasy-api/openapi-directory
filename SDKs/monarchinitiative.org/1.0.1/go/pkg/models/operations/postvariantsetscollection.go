package operations

import (
	"openapi/pkg/models/shared"
)

type PostVariantSetsCollectionRequest struct {
	Request shared.VariantSet `request:"mediaType=application/json"`
}

type PostVariantSetsCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
