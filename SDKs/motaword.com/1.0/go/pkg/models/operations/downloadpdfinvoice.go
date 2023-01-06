package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadPdfInvoicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadPdfInvoiceRequest struct {
	PathParams DownloadPdfInvoicePathParams
}

type DownloadPdfInvoiceResponse struct {
	ContentType                                     string
	Error                                           *shared.Error
	StatusCode                                      int64
	DownloadPdfInvoice200ApplicationPdfBinaryString []byte
}
