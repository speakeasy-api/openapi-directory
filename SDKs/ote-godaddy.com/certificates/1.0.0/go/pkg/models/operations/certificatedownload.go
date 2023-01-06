package operations

type CertificateDownloadPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateDownloadRequest struct {
	PathParams CertificateDownloadPathParams
}

type CertificateDownloadResponse struct {
	CertificateBundle *interface{}
	ContentType       string
	Error             *interface{}
	StatusCode        int64
}
