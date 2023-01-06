package operations

import (
	"openapi/pkg/models/shared"
)

type HTMLCleanRequestBody struct {
	Content    string `form:"name=content"`
	OutputType string `form:"name=output-type"`
}

type HTMLCleanRequest struct {
	Request HTMLCleanRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type HTMLCleanResponse struct {
	APIError                                *shared.APIError
	ContentType                             string
	HTMLClean200ApplicationJSONBinaryString []byte
	StatusCode                              int64
}
