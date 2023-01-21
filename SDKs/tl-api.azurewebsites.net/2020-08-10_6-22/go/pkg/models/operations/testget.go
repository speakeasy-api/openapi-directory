package operations

import (
	"openapi/pkg/models/shared"
)

type TestGetResponse struct {
	ContentType string
	StatusCode  int64
	TestDTO     *shared.TestDto
}
