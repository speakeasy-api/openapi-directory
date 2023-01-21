package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleAddMeasureUnitRequest struct {
	Request []shared.MeasureUnitDto `request:"mediaType=application/json"`
}

type ArticleAddMeasureUnitResponse struct {
	APIResponse                   *shared.APIResponse
	ContentType                   string
	DefaultResponseDTOOfStatusDTO *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
