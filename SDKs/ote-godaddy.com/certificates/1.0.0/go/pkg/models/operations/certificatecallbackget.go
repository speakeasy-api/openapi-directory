package operations

type CertificateCallbackGetPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateCallbackGetRequest struct {
	PathParams CertificateCallbackGetPathParams
}

type CertificateCallbackGetResponse struct {
	CertificateCallback *interface{}
	ContentType         string
	Error               *interface{}
	StatusCode          int64
}
