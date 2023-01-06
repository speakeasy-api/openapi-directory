package operations

type CertificateAlternateEmailAddressPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
	EmailAddress  string `pathParam:"style=simple,explode=false,name=emailAddress"`
}

type CertificateAlternateEmailAddressRequest struct {
	PathParams CertificateAlternateEmailAddressPathParams
}

type CertificateAlternateEmailAddressResponse struct {
	CertificateEmailHistory *interface{}
	ContentType             string
	Error                   *interface{}
	StatusCode              int64
}
