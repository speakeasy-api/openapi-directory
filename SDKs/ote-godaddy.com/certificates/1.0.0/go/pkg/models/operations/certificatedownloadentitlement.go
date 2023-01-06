package operations

type CertificateDownloadEntitlementQueryParams struct {
	EntitlementID string `queryParam:"style=form,explode=true,name=entitlementId"`
}

type CertificateDownloadEntitlementRequest struct {
	QueryParams CertificateDownloadEntitlementQueryParams
}

type CertificateDownloadEntitlementResponse struct {
	CertificateBundle *interface{}
	ContentType       string
	Error             *interface{}
	StatusCode        int64
}
