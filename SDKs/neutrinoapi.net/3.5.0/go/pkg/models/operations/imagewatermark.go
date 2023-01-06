package operations

import (
	"openapi/pkg/models/shared"
)

type ImageWatermarkRequestBody struct {
	Format       *string `form:"name=format"`
	Height       *int32  `form:"name=height"`
	ImageURL     string  `form:"name=image-url"`
	Opacity      *int32  `form:"name=opacity"`
	Position     *string `form:"name=position"`
	WatermarkURL string  `form:"name=watermark-url"`
	Width        *int32  `form:"name=width"`
}

type ImageWatermarkRequest struct {
	Request ImageWatermarkRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ImageWatermarkResponse struct {
	APIError                                     *shared.APIError
	ContentType                                  string
	ImageWatermark200ApplicationJSONBinaryString []byte
	StatusCode                                   int64
}
