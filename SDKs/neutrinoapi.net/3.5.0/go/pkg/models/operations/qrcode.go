package operations

import (
	"openapi/pkg/models/shared"
)

type QrCodeRequestBody struct {
	BgColor *string `form:"name=bg-color"`
	Content string  `form:"name=content"`
	FgColor *string `form:"name=fg-color"`
	Height  *int32  `form:"name=height"`
	Width   *int32  `form:"name=width"`
}

type QrCodeRequest struct {
	Request QrCodeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type QrCodeResponse struct {
	APIError                             *shared.APIError
	ContentType                          string
	QRCode200ApplicationJSONBinaryString []byte
	StatusCode                           int64
}
