package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetDomainsRequest struct {
	Headers GetDomainsHeaders
}

type GetDomainsResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Domains           []shared.Domain
	StatusCode        int64
}
