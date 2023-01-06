package operations

type GetDomainInformationByCertificateIDPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
	CustomerID    string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetDomainInformationByCertificateIDRequest struct {
	PathParams GetDomainInformationByCertificateIDPathParams
}

type GetDomainInformationByCertificateIDResponse struct {
	Body                        []byte
	ContentType                 string
	DomainVerificationSummaries []interface{}
	StatusCode                  int64
}
