package operations

type CertificateVerifydomaincontrolPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateVerifydomaincontrolRequest struct {
	PathParams CertificateVerifydomaincontrolPathParams
}

type CertificateVerifydomaincontrolResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
