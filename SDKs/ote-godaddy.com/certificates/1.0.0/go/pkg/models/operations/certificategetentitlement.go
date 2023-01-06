package operations

type CertificateGetEntitlementQueryParams struct {
	EntitlementID string `queryParam:"style=form,explode=true,name=entitlementId"`
	Latest        *bool  `queryParam:"style=form,explode=true,name=latest"`
}

type CertificateGetEntitlementRequest struct {
	QueryParams CertificateGetEntitlementQueryParams
}

type CertificateGetEntitlementResponse struct {
	Certificates []interface{}
	ContentType  string
	Error        *interface{}
	StatusCode   int64
}
