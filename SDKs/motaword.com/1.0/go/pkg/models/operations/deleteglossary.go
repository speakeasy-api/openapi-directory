package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGlossaryPathParams struct {
	GlossaryID int64 `pathParam:"style=simple,explode=false,name=glossaryId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteGlossaryRequest struct {
	PathParams DeleteGlossaryPathParams
}

type DeleteGlossaryResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
