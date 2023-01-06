package operations

import (
	"openapi/pkg/models/shared"
)

type ImageResizeRequestBody struct {
	Format   *string `form:"name=format"`
	Height   int32   `form:"name=height"`
	ImageURL string  `form:"name=image-url"`
	Width    int32   `form:"name=width"`
}

type ImageResizeRequest struct {
	Request ImageResizeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ImageResizeResponse struct {
	APIError                                  *shared.APIError
	ContentType                               string
	ImageResize200ApplicationJSONBinaryString []byte
	StatusCode                                int64
}
