package operations

import (
	"openapi/pkg/models/shared"
)

type GetGlossaryPathParams struct {
	GlossaryID int64 `pathParam:"style=simple,explode=false,name=glossaryId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetGlossaryRequest struct {
	PathParams GetGlossaryPathParams
}

type GetGlossaryResponse struct {
	ContentType string
	Error       *shared.Error
	Glossary    *shared.Glossary
	StatusCode  int64
}
