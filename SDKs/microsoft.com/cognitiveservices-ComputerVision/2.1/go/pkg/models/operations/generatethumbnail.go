package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateThumbnailQueryParams struct {
	Height        int32 `queryParam:"style=form,explode=true,name=height"`
	SmartCropping *bool `queryParam:"style=form,explode=true,name=smartCropping"`
	Width         int32 `queryParam:"style=form,explode=true,name=width"`
}

type GenerateThumbnailRequest struct {
	QueryParams GenerateThumbnailQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type GenerateThumbnailResponse struct {
	Body                                                   []byte
	ContentType                                            string
	GenerateThumbnail200ApplicationOctetStreamBinaryString []byte
	StatusCode                                             int64
}
