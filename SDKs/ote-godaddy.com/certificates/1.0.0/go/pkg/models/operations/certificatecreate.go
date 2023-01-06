package operations

type CertificateCreateHeaders struct {
	XMarketID *string `header:"style=simple,explode=false,name=X-Market-Id"`
}

type CertificateCreateRequest struct {
	Headers CertificateCreateHeaders
	Request interface{} `request:"mediaType=application/json"`
}

type CertificateCreateResponse struct {
	CertificateIdentifier *interface{}
	ContentType           string
	Error                 *interface{}
	StatusCode            int64
}
