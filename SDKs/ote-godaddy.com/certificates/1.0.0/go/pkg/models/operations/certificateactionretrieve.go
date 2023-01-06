package operations

type CertificateActionRetrievePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateActionRetrieveRequest struct {
	PathParams CertificateActionRetrievePathParams
}

type CertificateActionRetrieveResponse struct {
	ArrayOfCertificateAction []interface{}
	ContentType              string
	Error                    *interface{}
	StatusCode               int64
}
