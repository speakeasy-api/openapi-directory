package operations

type CertificateResendEmailAddressPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
	EmailAddress  string `pathParam:"style=simple,explode=false,name=emailAddress"`
	EmailID       string `pathParam:"style=simple,explode=false,name=emailId"`
}

type CertificateResendEmailAddressRequest struct {
	PathParams CertificateResendEmailAddressPathParams
}

type CertificateResendEmailAddressResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
