package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectStringsForLanguagePathParams struct {
	Language  string `pathParam:"style=simple,explode=false,name=language"`
	ProjectID int64  `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectStringsForLanguageRequest struct {
	PathParams GetProjectStringsForLanguagePathParams
}

type GetProjectStringsForLanguageResponse struct {
	ContentType string
	StatusCode  int64
	StringList  *shared.StringList
}
