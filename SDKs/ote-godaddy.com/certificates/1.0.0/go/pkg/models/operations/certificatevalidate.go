package operations

type CertificateValidateHeaders struct {
	XMarketID *string `header:"style=simple,explode=false,name=X-Market-Id"`
}

type CertificateValidateRequest struct {
	Headers CertificateValidateHeaders
	Request interface{} `request:"mediaType=application/json"`
}

type CertificateValidateResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
