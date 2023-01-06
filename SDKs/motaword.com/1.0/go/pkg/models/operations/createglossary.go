package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGlossaryPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type CreateGlossaryRequestBodyGlossaries struct {
	Content    []byte `multipartForm:"content"`
	Glossaries string `multipartForm:"name=glossaries"`
}

type CreateGlossaryRequestBody struct {
	Glossaries CreateGlossaryRequestBodyGlossaries `multipartForm:"file"`
}

type CreateGlossaryRequest struct {
	PathParams CreateGlossaryPathParams
	Request    *CreateGlossaryRequestBody `request:"mediaType=multipart/form-data"`
}

type CreateGlossaryResponse struct {
	ContentType string
	Error       *shared.Error
	Glossary    *shared.Glossary
	StatusCode  int64
}
