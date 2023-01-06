package operations

type CertificateRenewPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateRenewRequest struct {
	PathParams CertificateRenewPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type CertificateRenewResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
