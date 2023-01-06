package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectStringsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectStringsRequest struct {
	PathParams GetProjectStringsPathParams
}

type GetProjectStringsResponse struct {
	ContentType string
	StatusCode  int64
	StringList  *shared.StringList
}
