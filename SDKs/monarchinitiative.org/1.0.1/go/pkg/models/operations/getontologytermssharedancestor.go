package operations

type GetOntologyTermsSharedAncestorPathParams struct {
	Object  string `pathParam:"style=simple,explode=false,name=object"`
	Subject string `pathParam:"style=simple,explode=false,name=subject"`
}

type GetOntologyTermsSharedAncestorRequest struct {
	PathParams GetOntologyTermsSharedAncestorPathParams
}

type GetOntologyTermsSharedAncestorResponse struct {
	ContentType string
	StatusCode  int64
}
