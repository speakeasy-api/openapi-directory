package operations

type GetCustomerCertificatesByCustomerIDPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetCustomerCertificatesByCustomerIDQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetCustomerCertificatesByCustomerIDRequest struct {
	PathParams  GetCustomerCertificatesByCustomerIDPathParams
	QueryParams GetCustomerCertificatesByCustomerIDQueryParams
}

type GetCustomerCertificatesByCustomerIDResponse struct {
	Body                   []byte
	CertificateSummariesV2 *interface{}
	ContentType            string
	StatusCode             int64
}
