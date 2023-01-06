package operations

type GetAcmeExternalAccountBindingPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetAcmeExternalAccountBindingRequest struct {
	PathParams GetAcmeExternalAccountBindingPathParams
}

type GetAcmeExternalAccountBindingResponse struct {
	Body                   []byte
	ContentType            string
	ExternalAccountBinding *interface{}
	StatusCode             int64
}
