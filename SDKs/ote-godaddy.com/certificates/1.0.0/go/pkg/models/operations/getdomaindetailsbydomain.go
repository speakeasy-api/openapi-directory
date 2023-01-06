package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainDetailsByDomainPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
	CustomerID    string `pathParam:"style=simple,explode=false,name=customerId"`
	Domain        string `pathParam:"style=simple,explode=false,name=domain"`
}

type GetDomainDetailsByDomainRequest struct {
	PathParams GetDomainDetailsByDomainPathParams
}

type GetDomainDetailsByDomainResponse struct {
	Body                     []byte
	ContentType              string
	DomainVerificationDetail *shared.DomainVerificationDetail
	StatusCode               int64
}
