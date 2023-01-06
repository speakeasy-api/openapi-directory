package operations

type GetCertificateDetailByCertIdentifierPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
	CustomerID    string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetCertificateDetailByCertIdentifierRequest struct {
	PathParams GetCertificateDetailByCertIdentifierPathParams
}

type GetCertificateDetailByCertIdentifierResponse struct {
	Body                []byte
	CertificateDetailV2 *interface{}
	ContentType         string
	StatusCode          int64
}
