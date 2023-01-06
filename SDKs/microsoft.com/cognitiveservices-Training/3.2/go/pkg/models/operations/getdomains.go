package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Domains           []shared.Domain
	StatusCode        int64
}
