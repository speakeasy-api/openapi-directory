package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTranslationMemoryUnitRequest struct {
	Request *shared.TranslationMemoryUnit `request:"mediaType=application/json"`
}

type UpdateTranslationMemoryUnitResponse struct {
	ContentType string
	StatusCode  int64
}
