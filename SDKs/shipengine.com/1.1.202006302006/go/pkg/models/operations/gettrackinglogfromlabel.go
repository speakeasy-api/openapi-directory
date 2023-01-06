package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackingLogFromLabelPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=label_id"`
}

type GetTrackingLogFromLabelRequest struct {
	PathParams GetTrackingLogFromLabelPathParams
}

type GetTrackingLogFromLabelResponse struct {
	ContentType                         string
	StatusCode                          int64
	ErrorResponseBody                   *shared.ErrorResponseBody
	GetTrackingLogFromLabelResponseBody *shared.GetTrackingLogFromLabelResponseBody
}
