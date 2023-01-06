package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStyleGuidePathParams struct {
	ProjectID    int64 `pathParam:"style=simple,explode=false,name=projectId"`
	StyleGuideID int64 `pathParam:"style=simple,explode=false,name=styleGuideId"`
}

type DeleteStyleGuideRequest struct {
	PathParams DeleteStyleGuidePathParams
}

type DeleteStyleGuideResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
