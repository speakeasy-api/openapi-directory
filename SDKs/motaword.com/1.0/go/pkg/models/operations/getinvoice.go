package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetInvoiceRequest struct {
	PathParams GetInvoicePathParams
}

type GetInvoiceResponse struct {
	ContentType string
	Error       *shared.Error
	Invoice     *shared.Invoice
	StatusCode  int64
}
