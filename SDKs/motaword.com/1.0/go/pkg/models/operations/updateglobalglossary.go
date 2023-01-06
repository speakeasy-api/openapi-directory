package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlobalGlossaryRequestBodyGlossary struct {
	Content  []byte `multipartForm:"content"`
	Glossary string `multipartForm:"name=glossary"`
}

type UpdateGlobalGlossaryRequestBody struct {
	Glossary UpdateGlobalGlossaryRequestBodyGlossary `multipartForm:"file"`
}

type UpdateGlobalGlossaryRequest struct {
	Request *UpdateGlobalGlossaryRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateGlobalGlossaryResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
