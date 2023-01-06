package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectTranslationsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectTranslationsRequest struct {
	PathParams GetProjectTranslationsPathParams
}

type GetProjectTranslationsResponse struct {
	ContentType string
	StatusCode  int64
	StringList  *shared.StringList
}
