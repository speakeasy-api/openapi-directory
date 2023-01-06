package operations

type CertificateGetPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateGetRequest struct {
	PathParams CertificateGetPathParams
}

type CertificateGetResponse struct {
	Certificate *interface{}
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
