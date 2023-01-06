package operations

import (
	"openapi/pkg/models/shared"
)

type MfrGetV2ManufacturersGetResponse struct {
	ContentType  string
	OpenAQResult *shared.OpenAqResult
	StatusCode   int64
}
