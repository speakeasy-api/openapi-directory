package operations

type CertificateEmailHistoryPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateEmailHistoryRequest struct {
	PathParams CertificateEmailHistoryPathParams
}

type CertificateEmailHistoryResponse struct {
	CertificateEmailHistory *interface{}
	ContentType             string
	Error                   *interface{}
	StatusCode              int64
}
