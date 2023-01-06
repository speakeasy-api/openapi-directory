package operations

import (
	"openapi/pkg/models/shared"
)

type SummaryGetV2SummaryGetResponse struct {
	ContentType  string
	OpenAQResult *shared.OpenAqResult
	StatusCode   int64
}
