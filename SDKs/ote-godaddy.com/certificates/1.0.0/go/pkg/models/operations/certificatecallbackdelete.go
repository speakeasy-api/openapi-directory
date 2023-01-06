package operations

type CertificateCallbackDeletePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateCallbackDeleteRequest struct {
	PathParams CertificateCallbackDeletePathParams
}

type CertificateCallbackDeleteResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
