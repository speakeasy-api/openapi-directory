package operations

import (
	"openapi/pkg/models/shared"
)

type RecognizePrintedTextQueryParams struct {
	DetectOrientation bool                    `queryParam:"style=form,explode=true,name=detectOrientation"`
	Language          *shared.OcrLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type RecognizePrintedTextRequest struct {
	QueryParams RecognizePrintedTextQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type RecognizePrintedTextResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	OcrResult           *shared.OcrResult
	StatusCode          int64
}
