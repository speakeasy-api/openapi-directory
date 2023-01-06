package operations

type CertificateCancelPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateCancelRequest struct {
	PathParams CertificateCancelPathParams
}

type CertificateCancelResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
