package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainPathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainRequest struct {
	PathParams GetDomainPathParams
}

type GetDomainResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Domain            *shared.Domain
	StatusCode        int64
}
