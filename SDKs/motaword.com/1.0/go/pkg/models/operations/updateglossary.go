package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlossaryPathParams struct {
	GlossaryID int64 `pathParam:"style=simple,explode=false,name=glossaryId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type UpdateGlossaryRequestBodyGlossaries struct {
	Content    []byte `multipartForm:"content"`
	Glossaries string `multipartForm:"name=glossaries"`
}

type UpdateGlossaryRequestBody struct {
	Glossaries UpdateGlossaryRequestBodyGlossaries `multipartForm:"file"`
}

type UpdateGlossaryRequest struct {
	PathParams UpdateGlossaryPathParams
	Request    *UpdateGlossaryRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateGlossaryResponse struct {
	ContentType string
	Error       *shared.Error
	Glossary    *shared.Glossary
	StatusCode  int64
}
