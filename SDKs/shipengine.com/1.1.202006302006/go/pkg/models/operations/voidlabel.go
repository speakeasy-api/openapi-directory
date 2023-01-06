package operations

import (
	"openapi/pkg/models/shared"
)

type VoidLabelPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=label_id"`
}

type VoidLabelRequest struct {
	PathParams VoidLabelPathParams
}

type VoidLabelResponse struct {
	ContentType           string
	StatusCode            int64
	ErrorResponseBody     *shared.ErrorResponseBody
	VoidLabelResponseBody *shared.VoidLabelResponseBody
}
