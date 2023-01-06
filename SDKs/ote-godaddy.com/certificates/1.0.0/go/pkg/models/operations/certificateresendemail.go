package operations

type CertificateResendEmailPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
	EmailID       string `pathParam:"style=simple,explode=false,name=emailId"`
}

type CertificateResendEmailRequest struct {
	PathParams CertificateResendEmailPathParams
}

type CertificateResendEmailResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
