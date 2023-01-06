package operations

import (
	"openapi/pkg/models/shared"
)

type PostRemovebgRequests struct {
	RemoveBgJSON      *shared.RemoveBgJSON      `request:"mediaType=application/json"`
	RemoveBgJson1     *shared.RemoveBgJSON      `request:"mediaType=application/x-www-form-urlencoded"`
	RemoveBgMultipart *shared.RemoveBgMultipart `request:"mediaType=multipart/form-data"`
}

type PostRemovebgRequest struct {
	Request PostRemovebgRequests
}

type PostRemovebgResponse struct {
	Body                                     []byte
	ContentType                              string
	Headers                                  map[string][]string
	RemoveBgJSONResponse                     *shared.RemoveBgJSONResponse
	StatusCode                               int64
	PostRemovebg200ImageWildcardBinaryString []byte
}
