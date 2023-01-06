package operations

import (
	"openapi/pkg/models/shared"
)

type EchoQueryParams struct {
	Text *string `queryParam:"style=form,explode=true,name=text"`
}

type EchoRequest struct {
	QueryParams EchoQueryParams
}

type EchoResponse struct {
	ContentType string
	StatusCode  int64
	TestEcho    *shared.TestEcho
}
