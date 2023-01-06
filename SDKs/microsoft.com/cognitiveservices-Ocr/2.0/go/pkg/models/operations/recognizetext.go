package operations

import (
	"openapi/pkg/models/shared"
)

type RecognizeTextQueryParams struct {
	Mode shared.TextRecognitionModeEnum `queryParam:"style=form,explode=true,name=mode"`
}

type RecognizeTextRequest struct {
	QueryParams RecognizeTextQueryParams
	Request     shared.ImageURL `request:"mediaType=application/json"`
}

type RecognizeTextResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
}
