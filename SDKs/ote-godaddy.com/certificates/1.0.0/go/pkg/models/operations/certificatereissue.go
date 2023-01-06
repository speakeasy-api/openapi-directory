package operations

type CertificateReissuePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateReissueRequest struct {
	PathParams CertificateReissuePathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type CertificateReissueResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
