package operations

type CertificateCallbackReplacePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateCallbackReplaceQueryParams struct {
	CallbackURL string `queryParam:"style=form,explode=true,name=callbackUrl"`
}

type CertificateCallbackReplaceRequest struct {
	PathParams  CertificateCallbackReplacePathParams
	QueryParams CertificateCallbackReplaceQueryParams
}

type CertificateCallbackReplaceResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
