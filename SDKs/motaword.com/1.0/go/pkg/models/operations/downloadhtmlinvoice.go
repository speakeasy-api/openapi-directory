package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadHTMLInvoicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadHTMLInvoiceRequest struct {
	PathParams DownloadHTMLInvoicePathParams
}

type DownloadHTMLInvoiceResponse struct {
	ContentType                          string
	Error                                *shared.Error
	StatusCode                           int64
	DownloadHTMLInvoice200TextHTMLString *string
}
