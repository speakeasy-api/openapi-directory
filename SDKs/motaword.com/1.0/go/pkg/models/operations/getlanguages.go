package operations

import (
	"openapi/pkg/models/shared"
)

type GetLanguagesResponse struct {
	ContentType string
	Languages   []shared.Language
	StatusCode  int64
}
