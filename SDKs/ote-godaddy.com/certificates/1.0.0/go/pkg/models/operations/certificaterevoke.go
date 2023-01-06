package operations

type CertificateRevokePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateRevokeRequest struct {
	PathParams CertificateRevokePathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type CertificateRevokeResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
