package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIPdfWkhtmltopdfRequest struct {
	Request *shared.WkHTMLToPdfRequestDto `request:"mediaType=application/json"`
}

type PostAPIPdfWkhtmltopdfResponse struct {
	ContentType                                        string
	ErrorResponseDto                                   *shared.ErrorResponseDto
	PdfResponseDto                                     *shared.PdfResponseDto
	StatusCode                                         int64
	PostAPIPdfWkhtmltopdf200ApplicationPdfBinaryString []byte
}
